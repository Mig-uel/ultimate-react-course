'use server'

import { revalidatePath } from 'next/cache'
import { auth, signIn, signOut } from './auth'
import {
  deleteBooking,
  getGuest,
  updateBooking,
  updateGuest,
  createBooking as newBooking,
} from './data-service'
import { useSessionUser } from './helpers'
import { redirect } from 'next/navigation'
import { Booking } from '@/app/types'

/** Server Actions */

/** Sign In */
export async function signInAction(redirect: string) {
  console.log(redirect)

  await signIn('google', {
    redirectTo: redirect || '/account',
  })
}

/** Sign Out */
export async function signOutAction() {
  await signOut({
    redirectTo: '/',
  })
}

/** Update Profile */
export async function updateProfile(formData: FormData) {
  const session = await auth()

  if (!session || !session.user) throw new Error()

  const { user } = session

  const data = Object.fromEntries(formData) as Record<string, string>

  if (!/^[a-zA-Z0-9]{6,12}$/.test(data.nationalID))
    throw new Error('National ID is invalid')

  await updateGuest(user.guestID, {
    nationality: data.nationality.split('%')[0],
    nationalID: data.nationalID,
    countryFlag: data.nationality.split('%')[1],
  })

  return revalidatePath('/account/profile')
}

/** Delete Reservation */
export async function deleteReservation(bookingID: number) {
  const user = await useSessionUser()
  const dbUser = await getGuest(user.email!)

  await deleteBooking(bookingID, dbUser.id)

  return revalidatePath('/account/reservations')
}

/** Update Reservation */
export async function updateReservation(
  info: { guestID: number; bookingID: number },
  formData: FormData
) {
  const user = await useSessionUser()

  if (user.guestID !== info.guestID)
    throw new Error('Invalid session, please login again.')

  const data = Object.fromEntries(formData) as Record<string, string>

  await updateBooking(info.bookingID, {
    numGuests: +data.numGuests,
    observations: data.observations,
  })

  revalidatePath('/account')
  return redirect('/account/reservations')
}

/** Create Booking */
export async function createBooking(
  bookingData: Partial<Booking> & { cabinPrice: number },
  formData: FormData
) {
  const user = await useSessionUser()

  const booking: Partial<Booking> = {
    ...bookingData,
    guestID: user.guestID,
    status: 'unconfirmed',
    numGuests: +formData.get('numGuests')!,
    observations: (formData.get('observations') as string).slice(0, 1000) || '',
    extrasPrice: 0,
    isPaid: false,
    hasBreakfast: false,
    totalPrice: bookingData.cabinPrice,
  }

  await newBooking(booking)

  return revalidatePath('/cabins')
}
