import { supabase } from './supabase'
import type { Tables } from '../supabase_types'

export const getCabins = async () => {
  const { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error(error.message)
    throw new Error('Cabins could not be loaded')
  }

  return data
}

export const createCabin = async (cabin: Tables<'cabins'>) => {
  const { data, error } = await supabase.from('cabins').insert([cabin])

  if (error) {
    console.error(error)
    throw new Error('Cabin could not be created')
  }

  return data
}

export const deleteCabin = async (id: number) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)

  if (error) {
    console.error(error.message)
    throw new Error('Cabin could not be deleted')
  }

  return data
}
