import { z } from 'zod';

/**
 * FAQ query schema
 */
export const faqQuerySchema = z.object({
    locale: z.enum(['es', 'en', 'de']).default('es'),
    category: z.enum(['general', 'tickets', 'venue', 'travel']).optional(),
});

export type FAQQueryInput = z.infer<typeof faqQuerySchema>;
