import { useQuery } from '@tanstack/react-query'
import { getBookings } from '../../services/api_booking'

export const useBookings = () => {
  const { data: bookings, isLoading } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings,
  })

  return {
    bookings,
    isLoading,
  }
}
