import { useQuery } from '@tanstack/react-query'
import { getCabins } from '../../services/api_cabins'

export const useCabins = () => {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  })

  return {
    cabins,
    isLoading,
  }
}
