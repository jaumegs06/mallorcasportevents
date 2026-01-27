import { z } from 'zod';

/**
 * Contact form schema
 */
export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(100, 'El nombre es demasiado largo')
        .trim(),
    email: z
        .string()
        .min(1, 'El email es requerido')
        .email('Email inválido')
        .toLowerCase()
        .trim(),
    subject: z
        .string()
        .min(5, 'El asunto debe tener al menos 5 caracteres')
        .max(200, 'El asunto es demasiado largo')
        .trim(),
    message: z
        .string()
        .min(10, 'El mensaje debe tener al menos 10 caracteres')
        .max(2000, 'El mensaje es demasiado largo (máximo 2000 caracteres)')
        .trim(),
    eventType: z
        .enum(['fitness-weekend', 'madrid-sevilla', 'rad-am-ring', 'general'])
        .optional()
        .nullable(),
    subscribeNewsletter: z.boolean().default(false),
    locale: z.enum(['es', 'en', 'de']).default('es'),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
