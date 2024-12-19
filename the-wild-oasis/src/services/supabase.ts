import { createClient } from '@supabase/supabase-js'
import type { Database } from '../supabase_types'

const supabaseUrl = 'https://xmabeywyvhrwlxntjxya.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY as string

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
