'use client'

import type { Booking } from '@/app/types'
import ReservationCard from './ReservationCard'
import { useOptimistic } from 'react'

export default function ReservationList({ bookings }: { bookings: Booking[] }) {
  return (
    <ul className='space-y-6'>
      {bookings.map((booking) => (
        <ReservationCard booking={booking} key={booking.id} />
      ))}
    </ul>
  )
}
