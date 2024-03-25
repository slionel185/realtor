import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
    client: {
        NEXT_PUBLIC_URL: z.string().url().optional()
    },
    server: {
        REDIS_DATABASE_URL: z.string().url().optional(),
        POSTGRES_DATABASE_URL: z.string().url().optional(),

        NEXTAUTH_URL: z.string().url().optional(),
        NEXTAUTH_SECRET: z.string().optional(),

        RESEND_API_KEY: z.string().optional(),

        GOOGLE_CLIENT_ID: z.string().optional(),
        GOOGLE_CLIENT_SECRET: z.string().optional()
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL
    }
})