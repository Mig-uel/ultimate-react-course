import { useQuery } from '@tanstack/react-query'
import { getSettings } from '../../services/api_settings'

export const useSettings = () => {
  const {
    error,
    isLoading: isLoadingSettings,
    data: settings,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  })

  return {
    error,
    isLoadingSettings,
    settings,
  }
}
