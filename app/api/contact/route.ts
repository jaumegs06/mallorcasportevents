import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { contactFormSchema } from '@/lib/validations/contact';
import { sendContactConfirmation, sendAdminNotification } from '@/lib/email';
import { handleApiError, successResponse } from '@/lib/utils/errors';
import { contactRatelimit, getClientIp, checkRateLimit } from '@/lib/ratelimit';
import { randomBytes } from 'crypto';

/**
 * POST /api/contact
 * Submit contact form message
 */
export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const ip = getClientIp(request);
        const rateLimitResult = await checkRateLimit(contactRatelimit, ip);

        if (!rateLimitResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Has alcanzado el límite de mensajes por hora. Por favor, intenta más tarde.',
                },
                {
                    status: 429,
                    headers: {
                        'X-RateLimit-Limit': rateLimitResult.limit?.toString() || '',
                        'X-RateLimit-Remaining': rateLimitResult.remaining?.toString() || '',
                        'X-RateLimit-Reset': rateLimitResult.reset?.toString() || '',
                    },
                }
            );
        }

        // Parse and validate request body
        const body = await request.json();
        const data = contactFormSchema.parse(body);

        // Save contact message to database
        const contactMessage = await prisma.contactMessage.create({
            data: {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
                eventType: data.eventType || 'general',
                locale: data.locale,
                status: 'pending',
            },
        });

        // Handle newsletter subscription if requested
        let newsletterSubscribed = false;
        if (data.subscribeNewsletter) {
            try {
                // Check if already subscribed
                const existing = await prisma.newsletter.findUnique({
                    where: { email: data.email },
                });

                if (!existing) {
                    // Generate verification token
                    const verifyToken = randomBytes(32).toString('hex');

                    // Create newsletter subscription
                    await prisma.newsletter.create({
                        data: {
                            email: data.email,
                            locale: data.locale,
                            source: 'contact_form',
                            verifyToken,
                            verified: false,
                        },
                    });

                    newsletterSubscribed = true;
                } else if (existing.verified) {
                    newsletterSubscribed = true; // Already subscribed
                }
            } catch (error) {
                console.error('Newsletter subscription failed:', error);
                // Don't fail the entire request if newsletter fails
            }
        }

        // Send confirmation email to user
        await sendContactConfirmation(data.email, data.name, data.locale);

        // Send notification to admin
        await sendAdminNotification({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            eventType: data.eventType,
        });

        return successResponse({
            message: 'Mensaje enviado correctamente. Te responderemos pronto.',
            newsletterSubscribed,
            messageId: contactMessage.id,
        });
    } catch (error) {
        return handleApiError(error);
    }
}
