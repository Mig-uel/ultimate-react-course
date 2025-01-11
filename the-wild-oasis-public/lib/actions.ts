'use server'

import { signIn } from './auth'

export async function signInAction(redirect: string) {
  console.log(redirect)

  await signIn('google', {
    redirectTo: redirect || '/account',
  })
}
