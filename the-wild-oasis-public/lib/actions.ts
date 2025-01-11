'use server'

import { signIn, signOut } from './auth'

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
