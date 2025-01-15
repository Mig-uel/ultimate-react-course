'use client'

import { useFormStatus } from 'react-dom'

type Props = Partial<HTMLButtonElement> & {
  text: string
  pendingText: string
  children?: React.ReactNode
}

export default function Button({ text, pendingText, children }: Props) {
  const { pending } = useFormStatus()

  return (
    <button
      className='bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'
      disabled={pending}
    >
      {children ? children : null}
      <span className='mt-1'>{pending ? pendingText : text}</span>
    </button>
  )
}
