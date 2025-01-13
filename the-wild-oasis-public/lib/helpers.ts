import { auth } from './auth'

export async function useSessionUser() {
  const session = await auth()

  if (!session || !session.user)
    throw new Error('Invalid session, please login again.')

  return session.user
}
