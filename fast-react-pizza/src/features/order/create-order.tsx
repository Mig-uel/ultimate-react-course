import { useState } from 'react'
import { Form, useActionData, useNavigation } from 'react-router-dom'
import Button from '../../ui/Button'
import { useAppSelector } from '../../hooks'

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetable',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
]

function CreateOrder() {
  const { state } = useNavigation()
  const isSubmitting = state === 'submitting'
  const username = useAppSelector((state) => state.user.username)

  const formErrors = useActionData()

  const [withPriority, setWithPriority] = useState(false)
  const cart = fakeCart

  return (
    <div className='px-4 py-6'>
      <h2 className='text-xl font-semibold'>Ready to order? Let's go!</h2>

      <Form method='POST' className='mb-8 mt-6 space-y-6'>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2'>
          <label className='sm:basis-40'>Name</label>
          <input
            type='text'
            name='customer'
            required
            className='input grow'
            defaultValue={username || ''}
          />
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2'>
            <label className='sm:basis-40'>Phone number</label>
            <input type='tel' name='phone' required className='input grow' />
          </div>
          {formErrors?.phone && (
            <p className='mt-4 rounded bg-red-100 p-2 text-xs text-red-700'>
              {formErrors.phone}
            </p>
          )}
        </div>

        <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2'>
          <label className='sm:basis-40'>Address</label>
          <div className='grow'>
            <input
              type='text'
              name='address'
              required
              className='input w-full'
            />
          </div>
        </div>

        <div className='flex items-center gap-4 font-medium'>
          <input
            className='h-6 w-6 accent-yellow-400 outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2'
            type='checkbox'
            name='priority'
            id='priority'
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority' className=''>
            Prioritize Order? (Fees apply)
          </label>
        </div>

        <div className=''>
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'Ordering...' : 'Order Now'}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default CreateOrder
