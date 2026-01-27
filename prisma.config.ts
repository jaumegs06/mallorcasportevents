// Prisma Configuration for Mallorca Sport Events
// Database: Supabase PostgreSQL
import { defineConfig } from '@prisma/config';

export default defineConfig({
    schema: 'prisma/schema.prisma',
    migrations: {
        path: 'prisma/migrations',
    },
    datasource: {
        url: process.env.DATABASE_URL ?? '',
    },
});
