// Prisma Configuration for Mallorca Sport Events
// Database: Supabase PostgreSQL
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: "postgres://postgres.dfzubkurbzhflfpoytcp:ebGnWwDFmIg81oq3@aws-1-eu-central-2.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true",
  },
});
