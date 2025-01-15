'use client'

import type { Booking } from '@/app/types'
import ReservationCard from './ReservationCard'
import { useOptimistic } from 'react'
import { deleteReservation } from '@/lib/actions'

export default function ReservationList({ bookings }: { bookings: Booking[] }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currBookings, bookingID: number) => {
      return currBookings.filter((booking) => booking.id !== bookingID)
    }
  )

  async function handleDelete(bookingID: number) {
    optimisticDelete(bookingID)
    await deleteReservation(bookingID)
  }

  return (
    <ul className='space-y-6'>
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  )
}
