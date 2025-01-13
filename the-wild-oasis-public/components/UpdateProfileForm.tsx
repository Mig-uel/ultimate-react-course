'use client'

import { updateProfile } from '@/lib/actions'
import type { Guest } from '@/app/types'
import Image from 'next/image'

const UpdateProfileForm = ({
  children,
  guest,
}: {
  children: React.ReactNode
  guest: Guest
}) => {
  const { countryFlag, email, fullName, nationalID, nationality } = guest

  return (
    <form
      action={updateProfile}
      className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'
    >
      <div className='space-y-2'>
        <label>Full name</label>
        <input
          disabled
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
          defaultValue={fullName}
          name='fullName'
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          disabled
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
          defaultValue={email}
          name='email'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>Where are you from?</label>
          <Image
            src={countryFlag || ''}
            alt='Country flag'
            className='h-5 rounded-sm'
            width={40}
            height={40}
          />
        </div>

        <>{children}</>
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID'>National ID number</label>
        <input
          name='nationalID'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          defaultValue={nationalID || ''}
        />
      </div>

      <div className='flex justify-end items-center gap-6'>
        <button className='bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'>
          Update profile
        </button>
      </div>
    </form>
  )
}
export default UpdateProfileForm
