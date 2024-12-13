import { useState } from 'react'
import { Form, useActionData, useNavigation } from 'react-router-dom'
import Button from '../../ui/Button'

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
          <input type='text' name='customer' required className='input' />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type='tel' name='phone' required className='input' />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type='text' name='address' required className='input' />
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
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'Ordering...' : 'Order Now'}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default CreateOrder
