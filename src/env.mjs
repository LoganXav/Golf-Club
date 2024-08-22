import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // DATABASE_URL: z.string(),
    NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY: z.string(),
    NEXT_PUBLIC_PAYSTACK_SECRET_KEY: z.string(),
    // DATABASE_ANON_KEY: z.string(),
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
    // DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    NEXT_PUBLIC_PAYSTACK_SECRET_KEY:
      process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY,
    DATABASE_ANON_KEY: process.env.DATABASE_ANON_KEY,
  },
});
