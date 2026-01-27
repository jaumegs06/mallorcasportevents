import { NextRequest } from 'next/server';
import { prisma } from '@/lib/db';
import { faqQuerySchema } from '@/lib/validations/faq';
import { handleApiError, successResponse } from '@/lib/utils/errors';

/**
 * GET /api/faq?locale=es&category=tickets
 * Get frequently asked questions
 */
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const locale = searchParams.get('locale') || 'es';
        const category = searchParams.get('category');

        // Validate query params
        const query = faqQuerySchema.parse({
            locale,
            category: category || undefined,
        });

        // Build where clause
        const where: any = {
            active: true,
        };

        if (query.category) {
            where.category = query.category;
        }

        // Fetch FAQs
        const faqs = await prisma.fAQ.findMany({
            where,
            orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
            select: {
                id: true,
                [`question_${query.locale}`]: true,
                [`answer_${query.locale}`]: true,
                category: true,
                order: true,
            },
        });

        // Transform results to simple format
        const formattedFaqs = faqs.map((faq: any) => ({
            id: faq.id,
            question: faq[`question_${query.locale}`],
            answer: faq[`answer_${query.locale}`],
            category: faq.category,
            order: faq.order,
        }));

        return successResponse(
            {
                faqs: formattedFaqs,
                total: formattedFaqs.length,
                locale: query.locale,
                category: query.category || 'all',
            },
            200
        );
    } catch (error) {
        return handleApiError(error);
    }
}

// Enable caching for FAQ endpoint (revalidate every hour)
export const revalidate = 3600; // 1 hour
