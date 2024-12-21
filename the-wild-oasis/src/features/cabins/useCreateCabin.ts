import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCabin } from '../../services/api_cabins'
import type { Tables } from '../../supabase_types'

type FormData = Omit<Tables<'cabins'>, 'image'> & {
  image: FileList | string | null
}

export const useCreateCabin = () => {
  const queryClient = useQueryClient()

  const { isPending: isPendingCreating, mutate: create } = useMutation({
    mutationFn: (data: FormData) => {
      const { image, ...rest } = data

      if (image instanceof FileList)
        return createCabin({ ...rest, image: image[0] })
      
      return createCabin({ ...rest, image })
    },

    onSuccess: () => {
      toast.success('Cabin created!')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },

    onError: (error) => {
      toast.error(error.message)
    },
  })

  return { isPendingCreating, create }
}
