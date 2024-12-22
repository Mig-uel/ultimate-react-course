import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateSetting } from '../../services/api_settings'
import type { Tables } from '../../supabase_types'

export const useUpdateSetting = () => {
  const queryClient = useQueryClient()

  const { isPending, mutate: update } = useMutation({
    mutationFn: (newSettings: Partial<Tables<'settings'>>) =>
      updateSetting(newSettings),

    onSuccess() {
      toast.success('Setting updated successfully!')

      queryClient.invalidateQueries({
        queryKey: ['settings'],
      })
    },

    onError(error) {
      toast.error(error.message)
    },
  })

  return {
    isPending,
    update,
  }
}
