import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

/**
 * API Error Response
 */
export class ApiError extends Error {
    constructor(
        message: string,
        public statusCode: number = 400,
        public code?: string
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

/**
 * Handle API errors and return formatted response
 */
export function handleApiError(error: unknown) {
    console.error('API Error:', error);

    // Zod validation error
    if (error instanceof ZodError) {
        return NextResponse.json(
            {
                success: false,
                error: 'Validation failed',
                details: error.errors.map((e) => ({
                    field: e.path.join('.'),
                    message: e.message,
                })),
            },
            { status: 400 }
        );
    }

    // Custom API error
    if (error instanceof ApiError) {
        return NextResponse.json(
            {
                success: false,
                error: error.message,
                code: error.code,
            },
            { status: error.statusCode }
        );
    }

    // Unknown error
    return NextResponse.json(
        {
            success: false,
            error: 'Internal server error',
        },
        { status: 500 }
    );
}

/**
 * Success response helper
 */
export function successResponse(data: any, status: number = 200) {
    return NextResponse.json(
        {
            success: true,
            ...data,
        },
        { status }
    );
}
