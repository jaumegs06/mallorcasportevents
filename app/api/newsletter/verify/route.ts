import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyNewsletterSchema } from '@/lib/validations/newsletter';
import { handleApiError, successResponse, ApiError } from '@/lib/utils/errors';

/**
 * GET /api/newsletter/verify?token=xxx
 * Verify email subscription via token
 */
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const token = searchParams.get('token');

        // Validate token
        const data = verifyNewsletterSchema.parse({ token });

        // Find subscription by token
        const subscription = await prisma.newsletter.findUnique({
            where: { verifyToken: data.token },
        });

        if (!subscription) {
            throw new ApiError('Token inválido o expirado', 400, 'INVALID_TOKEN');
        }

        // Check if already verified
        if (subscription.verified) {
            return successResponse({
                message: 'Tu email ya ha sido verificado',
                alreadyVerified: true,
            });
        }

        // Update subscription to verified
        await prisma.newsletter.update({
            where: { id: subscription.id },
            data: {
                verified: true,
                verifyToken: null, // Clear token after verification
            },
        });

        return successResponse({
            message: '¡Email verificado correctamente! Gracias por suscribirte.',
            alreadyVerified: false,
        });
    } catch (error) {
        return handleApiError(error);
    }
}
