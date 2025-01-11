import { getBookedDatesByCabinId, getSettings } from '@/lib/data-service'
import { DateSelector, ReservationForm } from './'
import type { Cabin } from '@/app/types'

export default async function Reservation({ cabin }: { cabin: Cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ])

  return (
    <div className='grid grid-cols-2 border border-primary-800 min-h-[400px] mt-10'>
      <DateSelector
        settings={settings}
        cabin={cabin}
        bookedDates={bookedDates}
      />
      <ReservationForm cabin={cabin} />
    </div>
  )
}
