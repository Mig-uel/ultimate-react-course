import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editCabin } from '../../services/api_cabins'
import type { Tables } from '../../supabase_types'

type FormData = Omit<Tables<'cabins'>, 'image'> & {
  image: FileList
}

export const useUpdateCabin = (cabin: Tables<'cabins'>) => {
  const queryClient = useQueryClient()

  const { isPending: isPendingUpdating, mutate: update } = useMutation({
    mutationFn: (data: FormData) =>
      editCabin({ ...data, image: data.image[0] }, cabin.image!),

    onSuccess: () => {
      toast.success('Cabin edited!')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },

    onError: (error) => {
      toast.error(error.message)
    },
  })

  return {
    isPendingUpdating,
    update,
  }
}
