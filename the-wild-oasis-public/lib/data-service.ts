import { notFound } from 'next/navigation'
import { eachDayOfInterval } from 'date-fns'
import { supabase } from './supabase'
import { Booking } from '@/app/types'

/////////////
// GET

export async function getCabin(id: string) {
  const { data, error } = await supabase
    .from('cabins')
    .select('*')
    .eq('id', id)
    .single()

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error)
    notFound()
  }

  return data
}

export async function getCabinPrice(id: string) {
  const { data, error } = await supabase
    .from('cabins')
    .select('regularPrice, discount')
    .eq('id', id)
    .single()

  if (error) {
    console.error(error)
  }

  return data
}

export const getCabins = async function () {
  const { data, error } = await supabase
    .from('cabins')
    .select('id, name, maxCapacity, regularPrice, discount, image, description')
    .order('name')

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be loaded')
  }

  return data
}

// Guests are uniquely identified by their email address
export async function getGuest(email: string) {
  const { data, error } = await supabase
    .from('guests')
    .select('*')
    .eq('email', email)
    .single()

  // No error here! We handle the possibility of no guest in the sign in callback
  return data
}

export async function getBooking(id: string) {
  const { data, error, count } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error(error)
    throw new Error('Booking could not get loaded')
  }

  return data
}

export async function getBookings(guestId: number) {
  const { data, error, count } = await supabase
    .from('bookings')
    // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestID, cabinID, cabins(name, image), status'
    )
    .eq('guestID', guestId)
    .order('startDate')

  if (error) {
    console.error(error)
    throw new Error('Bookings could not get loaded')
  }

  if (!data) return []

  const bookings = data.map((booking) => ({
    ...booking,
    cabins: Array.isArray(booking.cabins) ? booking.cabins[0] : booking.cabins,
  }))

  return bookings
}

export async function getBookedDatesByCabinId(cabinId: string) {
  let today = new Date()
  today.setUTCHours(0, 0, 0, 0)

  const todayString = today.toISOString()

  // Getting all bookings
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('cabinID', cabinId)
    .or(`startDate.gte.${todayString},status.eq.checked-in`)

  if (error) {
    console.error(error)
    throw new Error('Bookings could not get loaded')
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      })
    })
    .flat()

  return bookedDates
}

export async function getSettings() {
  const { data, error } = await supabase.from('settings').select('*').single()

  if (error) {
    console.error(error)
    throw new Error('Settings could not be loaded')
  }

  return data
}

export async function getCountries() {
  try {
    const res = await fetch('https://restcountries.com/v2/all?fields=name,flag')
    const countries = await res.json()
    return countries
  } catch {
    throw new Error('Could not fetch countries')
  }
}

export async function getEntryCount(tableName: string) {
  const { count, error } = await supabase
    .from(tableName)
    .select('id', { count: 'exact', head: true })

  if (error) {
    console.log(error)
    throw new Error('Could not get entries count')
  }

  return count
}

/////////////
// CREATE

export async function createGuest(newGuest: Record<string, string>) {
  const { data, error } = await supabase.from('guests').insert([newGuest])

  if (error) {
    console.error(error)
    throw new Error('Guest could not be created')
  }

  return data
}

export async function createBooking(newBooking: Partial<Booking>) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single()

  if (error) {
    console.error(error)
    throw new Error('Booking could not be created')
  }

  return data
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(
  id: number,
  updatedFields: Record<string, string>
) {
  const { data, error } = await supabase
    .from('guests')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error(error)
    throw new Error('Guest could not be updated')
  }
  return data
}

export async function updateBooking(
  id: number,
  updatedFields: {
    numGuests?: number
    observations?: string
  }
) {
  const { data, error } = await supabase
    .from('bookings')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error(error)
    throw new Error('Booking could not be updated')
  }

  return data
}

/////////////
// DELETE

export async function deleteBooking(id: number, guestID: number) {
  const { data, error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', id)
    .eq('guestID', guestID)

  if (error) {
    console.error(error)
    throw new Error('Booking could not be deleted')
  }

  return data
}
