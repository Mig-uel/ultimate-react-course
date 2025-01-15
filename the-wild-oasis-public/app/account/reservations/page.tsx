import type { Booking } from '@/app/types'
import { ReservationList } from '@/components'
import { auth } from '@/lib/auth'
import { getBookings } from '@/lib/data-service'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Reservations',
}

export default async function Page() {
  const session = await auth()

  if (!session || !session.user) throw new Error('Invalid Session')

  const bookings = (await getBookings(session.user.guestID)) as Booking[]

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className='text-lg'>
          You have no reservations yet. Check out our{' '}
          <Link className='underline text-accent-500' href='/cabins'>
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  )
}
