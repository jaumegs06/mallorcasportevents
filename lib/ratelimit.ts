import { NextRequest } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Create Redis instance (will use env vars)
const redis = process.env.UPSTASH_REDIS_URL
    ? new Redis({
        url: process.env.UPSTASH_REDIS_URL!,
        token: process.env.UPSTASH_REDIS_TOKEN!,
    })
    : null;

/**
 * Newsletter rate limiter: 5 requests per minute per IP
 */
export const newsletterRatelimit = redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(5, '1 m'),
        analytics: true,
    })
    : null;

/**
 * Contact form rate limiter: 3 requests per hour per IP
 */
export const contactRatelimit = redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(3, '1 h'),
        analytics: true,
    })
    : null;

/**
 * Get client IP from request
 */
export function getClientIp(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : (request as any).ip || '127.0.0.1';
    return ip;
}

/**
 * Check rate limit and return result
 */
export async function checkRateLimit(
    limiter: Ratelimit | null,
    identifier: string
): Promise<{ success: boolean; limit?: number; remaining?: number; reset?: number }> {
    if (!limiter) {
        // If Redis is not configured, allow request (development mode)
        return { success: true };
    }

    const { success, limit, remaining, reset } = await limiter.limit(identifier);

    return {
        success,
        limit,
        remaining,
        reset,
    };
}
