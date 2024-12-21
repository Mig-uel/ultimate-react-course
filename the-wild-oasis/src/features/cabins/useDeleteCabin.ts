import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCabin } from '../../services/api_cabins'

export const useDeleteCabin = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending: isPendingDeleting } = useMutation({
    mutationFn: deleteCabin,

    onSuccess() {
      toast.success('Cabin successfully deleted')

      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      })
    },

    onError(error) {
      toast.error(error.message)
    },
  })

  return {
    isPendingDeleting,
    mutate,
  }
}
