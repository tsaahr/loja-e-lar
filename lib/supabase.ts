import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log("URL do Supabase:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("Chave do Supabase:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

