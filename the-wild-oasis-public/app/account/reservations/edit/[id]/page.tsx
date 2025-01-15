import { Button } from '@/components'
import { updateReservation } from '@/lib/actions'
import { getBooking, getSettings } from '@/lib/data-service'

type Props = {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
  const { id } = await params
  const booking = await getBooking(id)

  const settings = await getSettings()

  const reservationId = id
  const maxCapacity = settings.maxGuestsPerBooking

  const updateReservationAction = updateReservation.bind(null, {
    guestID: booking.guestID,
    bookingID: booking.id,
  })

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
        Edit Reservation #{reservationId}
      </h2>

      <form
        action={updateReservationAction}
        className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'
      >
        <div className='space-y-2'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            required
            defaultValue={booking.numGuests}
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            defaultValue={booking.observations}
          />
        </div>

        <div className='flex justify-end items-center gap-6'>
          <Button pendingText='Updating...' text='Update Reservation' />
        </div>
      </form>
    </div>
  )
}
