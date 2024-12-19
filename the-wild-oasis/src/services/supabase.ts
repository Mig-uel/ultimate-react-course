import { createClient } from '@supabase/supabase-js'
import type { Database } from '../supabase_types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY as string

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
