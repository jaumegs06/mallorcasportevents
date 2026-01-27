import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { subscribeNewsletterSchema } from '@/lib/validations/newsletter';
import { sendVerificationEmail } from '@/lib/email';
import { handleApiError, successResponse } from '@/lib/utils/errors';
import { newsletterRatelimit, getClientIp, checkRateLimit } from '@/lib/ratelimit';
import { randomBytes } from 'crypto';

/**
 * POST /api/newsletter/subscribe
 * Subscribe to newsletter with email verification
 */
export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const ip = getClientIp(request);
        const rateLimitResult = await checkRateLimit(newsletterRatelimit, ip);

        if (!rateLimitResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Demasiadas solicitudes. Por favor, intenta de nuevo más tarde.',
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
        const data = subscribeNewsletterSchema.parse(body);

        // Check if email already exists
        const existing = await prisma.newsletter.findUnique({
            where: { email: data.email },
        });

        if (existing) {
            // If already verified, return success (idempotent)
            if (existing.verified) {
                return successResponse({
                    message: 'Ya estás suscrito a nuestras novedades',
                    alreadySubscribed: true,
                });
            }

            // If not verified, resend verification email
            const emailResult = await sendVerificationEmail(
                existing.email,
                existing.verifyToken!,
                data.locale
            );

            if (!emailResult.success) {
                throw new Error('Failed to send verification email');
            }

            return successResponse({
                message: 'Te enviamos nuevamente el email de confirmación',
                alreadySubscribed: true,
            });
        }

        // Generate verification token
        const verifyToken = randomBytes(32).toString('hex');

        // Create newsletter subscription
        await prisma.newsletter.create({
            data: {
                email: data.email,
                locale: data.locale,
                source: data.source || 'manual',
                verifyToken,
                verified: false,
            },
        });

        // Send verification email
        const emailResult = await sendVerificationEmail(
            data.email,
            verifyToken,
            data.locale
        );

        if (!emailResult.success) {
            // Rollback: delete the subscription if email fails
            await prisma.newsletter.delete({
                where: { email: data.email },
            });
            throw new Error('Failed to send verification email');
        }

        return successResponse({
            message: 'Te enviamos un email de confirmación. Por favor, revisa tu bandeja de entrada.',
            alreadySubscribed: false,
        });
    } catch (error) {
        return handleApiError(error);
    }
}
