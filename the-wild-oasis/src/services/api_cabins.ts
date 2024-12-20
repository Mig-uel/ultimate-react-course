import { supabase } from './supabase'

export const getCabins = async () => {
  const { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error('Cabins could not be loaded')
    throw new Error(error.message)
  }

  return data
}

export const deleteCabin = async (id: number) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)

  if (error) {
    console.error('Cabin could not be deleted')
    throw new Error(error.message)
  }

  return data
}
