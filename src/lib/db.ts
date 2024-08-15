import { env } from '@/env.mjs';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.DATABASE_URL!,
  env.DATABASE_ANON_KEY
);
