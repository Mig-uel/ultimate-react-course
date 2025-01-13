'use server'

import { revalidatePath } from 'next/cache'
import { auth, signIn, signOut } from './auth'
import { updateGuest } from './data-service'

/** Server Actions */

export async function signInAction(redirect: string) {
  console.log(redirect)

  await signIn('google', {
    redirectTo: redirect || '/account',
  })
}

export async function signOutAction() {
  await signOut({
    redirectTo: '/',
  })
}

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
