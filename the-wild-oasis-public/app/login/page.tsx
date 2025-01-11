import { SignInButton } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function Login() {
  return (
    <div className='flex flex-col gap-10 mt-10 items-center'>
      <h2 className='text-3xl font-semibold'>
        Sign in to access your account area
      </h2>

      <SignInButton />
    </div>
  )
}
