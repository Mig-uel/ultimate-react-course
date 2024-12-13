import { useState } from 'react'
import { Form, useActionData, useNavigation } from 'react-router-dom'

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

  const formErrors = useActionData()

  const [withPriority, setWithPriority] = useState(false)
  const cart = fakeCart

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method='POST'>
        <div>
          <label>First Name</label>
          <input type='text' name='customer' required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type='tel' name='phone' required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type='text'
              name='address'
              required
              className='w-full rounded-full border border-stone-200 px-4 py-2 text-sm outline-none transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-400 md:px-6 md:py-3'
            />
          </div>
        </div>

        <div>
          <input
            className='h-6 w-6 accent-yellow-400 outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2'
            type='checkbox'
            name='priority'
            id='priority'
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Prioritize Order? (Fees apply)</label>
        </div>

        <div>
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className='mt-2 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400'
          >
            {isSubmitting ? 'Ordering...' : 'Order Now'}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default CreateOrder
