import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { createGuest, getGuest } from './data-service'

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google],

  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user
    },

    // runs on signIn method
    async signIn({ user }) {
      try {
        if (!user) return false

        const existingUser = await getGuest(user.email!)

        if (!existingUser) {
          await createGuest({
            email: user.email!,
            fullName: user.name!,
          })
        }

        return true
      } catch (error) {
        return false
      }
    },

    // runs each session req (ex. using auth())
    async session({ session }) {
      const guest = await getGuest(session.user.email)

      // assign session.user.guestID the guest's id we retrieved
      session.user.guestID = guest.id

      return session
    },
  },

  pages: {
    signIn: '/login',
  },
})
