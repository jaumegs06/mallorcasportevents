import { z } from 'zod';

/**
 * Newsletter subscription schema
 */
export const subscribeNewsletterSchema = z.object({
    email: z
        .string()
        .min(1, 'El email es requerido')
        .email('Email inválido')
        .toLowerCase()
        .trim(),
    locale: z.enum(['es', 'en', 'de']).default('es'),
    source: z.string().optional(),
});

export type SubscribeNewsletterInput = z.infer<typeof subscribeNewsletterSchema>;

/**
 * Newsletter verification schema
 */
export const verifyNewsletterSchema = z.object({
    token: z.string().min(1, 'Token requerido'),
});

export type VerifyNewsletterInput = z.infer<typeof verifyNewsletterSchema>;
