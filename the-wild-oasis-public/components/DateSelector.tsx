'use client'

import type { Cabin } from '@/app/types'
import { differenceInDays, isPast, isSameDay, isWithinInterval } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { useReservationContext } from './ReservationContext'

type Settings = {
  id: string
  minBookingLength: number
  maxBookingLength: number
  maxGuestsPerBooking: number
  breakfastPrice: number
}

// @ts-ignore
function isAlreadyBooked(range, datesArr: Date[]) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range?.from, end: range?.to })
    )
  )
}

export default function DateSelector({
  settings,
  bookedDates,
  cabin,
}: {
  settings: Settings
  bookedDates: Date[]
  cabin: Cabin
}) {
  /** Reservation Context */
  const { range, reset, setRange } = useReservationContext()

  const displayedRange = isAlreadyBooked(range, bookedDates)
    ? { to: undefined, from: undefined }
    : range

  const { discount, regularPrice } = cabin
  const numNights = differenceInDays(displayedRange.to!, displayedRange.from!)
  const cabinPrice = regularPrice * numNights - discount

  // Settings
  const { maxBookingLength, minBookingLength } = settings

  return (
    <div className='flex flex-col justify-between'>
      <DayPicker
        className='pt-12 place-self-center'
        mode='range'
        min={minBookingLength}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 2}
        captionLayout='dropdown'
        numberOfMonths={2}
        onSelect={(range) => {
          if (range === undefined) return

          setRange(range)
        }}
        selected={displayedRange}
        disabled={(currDate) =>
          isPast(currDate) ||
          bookedDates.some((date) => isSameDay(date, currDate))
        }
      />

      <div className='flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]'>
        <div className='flex items-baseline gap-6'>
          <p className='flex gap-2 items-baseline'>
            {discount > 0 ? (
              <>
                <span className='text-2xl'>${regularPrice - discount}</span>
                <span className='line-through font-semibold text-primary-700'>
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className='text-2xl'>${regularPrice}</span>
            )}
            <span className=''>/night</span>
          </p>
          {numNights ? (
            <>
              <p className='bg-accent-600 px-3 py-2 text-2xl'>
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className='text-lg font-bold uppercase'>Total</span>{' '}
                <span className='text-2xl font-semibold'>${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className='border border-primary-800 py-2 px-4 text-sm font-semibold'
            onClick={reset}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  )
}
