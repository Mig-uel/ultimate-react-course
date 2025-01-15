'use client'

import { deleteReservation } from '@/lib/actions'
import { TrashIcon } from '@heroicons/react/24/solid'
import Button from './Button'

function DeleteReservation({ bookingId }: { bookingId: number }) {
  const deleteReservationAction = deleteReservation.bind(null, bookingId)

  return (
    <form action={deleteReservationAction}>
      <Button pendingText='Deleting...' text='Delete'>
        {/* @ts-ignore */}
        <TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
      </Button>
    </form>
  )
}

export default DeleteReservation
