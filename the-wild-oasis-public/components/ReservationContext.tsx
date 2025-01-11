'use client'

import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useState,
} from 'react'
import type { DateRange } from 'react-day-picker'

const initialState = {
  from: undefined,
  to: undefined,
}

const ReservationContext = createContext<{
  range: DateRange
  setRange: Dispatch<SetStateAction<DateRange>>
  reset: () => void
}>({
  range: initialState,
  reset: () => {},
  setRange: () => {},
})

export function ReservationContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [range, setRange] = useState<DateRange>(initialState)

  const reset = () => setRange(initialState)

  const value = {
    range,
    setRange,
    reset,
  }

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  )
}

export function useReservationContext() {
  const ctx = useContext(ReservationContext)

  if (ctx === undefined)
    throw new Error('Cannot access ReservationContext outside children')

  return ctx
}
