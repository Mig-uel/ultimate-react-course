import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCabin } from '../../services/api_cabins'
import type { Tables } from '../../supabase_types'

type FormData = Omit<Tables<'cabins'>, 'image'> & {
  image: FileList
}

export const useCreateCabin = () => {
  const queryClient = useQueryClient()

  const { isPending: isPendingCreating, mutate: create } = useMutation({
    mutationFn: (data: FormData) =>
      createCabin({ ...data, image: data.image[0] }),

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
