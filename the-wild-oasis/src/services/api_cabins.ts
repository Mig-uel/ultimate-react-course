import { supabase } from './supabase'

export const getCabins = async () => {
  const { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error('Cabins could not be loaded')
    throw new Error(error.message)
  }

  return data
}
