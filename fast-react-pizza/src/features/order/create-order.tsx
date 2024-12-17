import { useState } from 'react'
import { Form, useActionData, useNavigation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getCartState, getCartTotal } from '../cart/cartSlice'
import { formatCurrency } from '../../utilities/helpers'
import Button from '../../ui/Button'
import EmptyCart from '../cart/empty-cart'
import LinkButton from '../../ui/LinkButton'
import { fetchAddress } from '../user/userSlice'

function CreateOrder() {
  const { state } = useNavigation()
  const isSubmitting = state === 'submitting'

  const dispatch = useAppDispatch()
  const [withPriority, setWithPriority] = useState(false)

  const username = useAppSelector((state) => state.user.username)
  const formErrors = useActionData()

  const cart = useAppSelector(getCartState)
  const cartTotal = useAppSelector(getCartTotal)
  const cartTotalWithPriority = withPriority
    ? cartTotal + cartTotal * 0.2
    : cartTotal

  if (!cart.length) return <EmptyCart />

  return (
    <div className='px-4 py-6'>
      <LinkButton to='/cart'>&larr; Back to cart</LinkButton>

      <h2 className='mt-4 text-xl font-semibold'>Ready to order? Let's go!</h2>

      <button onClick={() => dispatch(fetchAddress())}>locate me</button>

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
          <Button disabled={isSubmitting} buttonType='submit'>
            {isSubmitting
              ? 'Ordering...'
              : `${formatCurrency(cartTotalWithPriority)} - Order Now`}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default CreateOrder
