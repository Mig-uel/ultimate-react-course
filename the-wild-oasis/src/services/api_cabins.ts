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

export const createCabin = async (
  cabin: Omit<Tables<'cabins'>, 'image'> & { image: File }
) => {
  const imageExtension = cabin.image.name.split('.').pop()
  const imageName = `${Date.now()}.${imageExtension}`

  // const imagePath = `${
  //   import.meta.env.VITE_SUPABASE_URL
  // }/storage/v1/object/public/cabin-images/${imageName}`

  // upload image
  const { error: bucketError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, cabin.image)

  if (bucketError) {
    console.error(bucketError.message)
    throw new Error(bucketError.message)
  }

  // get image public url
  const { data: storageData } = supabase.storage
    .from('cabin-images')
    .getPublicUrl(imageName)

  // upload cabin
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...cabin, image: storageData.publicUrl }])

  if (error) {
    await supabase.storage.from('cabin-images').remove([imageName])

    console.error(error)
    throw new Error('Cabin could not be created')
  }

  return data
}

export const editCabin = async (
  cabin: Omit<Tables<'cabins'>, 'image'> & { image: File },
  oldImage: string
) => {
  let imageName = ''
  let publicUrl = ''
  let oldImagePath = ''

  // if user updated image
  if (cabin.image) {
    // construct image name
    const imageExtension = cabin.image.name.split('.').pop()
    imageName = `${Date.now()}.${imageExtension}`

    // upload image
    const { error: bucketError } = await supabase.storage
      .from('cabin-images')
      .upload(imageName, cabin.image)
    if (bucketError) {
      console.error(bucketError.message)
      throw new Error(bucketError.message)
    }

    // get image public url
    const { data: storageData } = supabase.storage
      .from('cabin-images')
      .getPublicUrl(imageName)
    publicUrl = storageData.publicUrl

    oldImagePath =
      oldImage && oldImage.split('/')[oldImage.split('/').length - 1]
  }

  if (publicUrl) {
    const { data, error } = await supabase
      .from('cabins')
      .update({ ...cabin, image: publicUrl })
      .eq('id', cabin.id)
      .select()
      .single()

    if (error) {
      console.error(error.message)
      throw new Error('Cabin could not be updated')
    }

    await supabase.storage.from('cabin-images').remove([oldImagePath])

    return data
  }

  const { data, error } = await supabase
    .from('cabins')
    .update({ ...cabin, image: undefined })
    .eq('id', cabin.id)
    .select()
    .single()

  if (error) {
    console.error(error.message)
    throw new Error('Cabin could not be updated')
  }

  return data
}

export const deleteCabin = async (cabin: Tables<'cabins'>) => {
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', +cabin.id)

  if (error) {
    console.error(error.message)
    throw new Error('Cabin could not be deleted')
  }

  if (!cabin.image) return data

  const imagePathArray = cabin.image?.split('/')
  const imagePath = `${imagePathArray[imagePathArray.length - 1]}`

  await supabase.storage.from('cabin-images').remove([imagePath])

  return data
}
