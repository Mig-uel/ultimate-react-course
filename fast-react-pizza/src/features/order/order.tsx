import { useLoaderData } from 'react-router-dom'
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utilities/helpers'
import OrderItem from './order-item'
import type * as types from '../../types'

function Order() {
  const order: types.OrderItem = useLoaderData()

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order

  console.log(priorityPrice)

  const deliveryIn = calcMinutesLeft(estimatedDelivery as Date)

  return (
    <div className='space-y-12 px-4 py-6'>
      <div className='flex flex-wrap items-center justify-between gap-5'>
        <h2 className='text-xl font-semibold'>Order #{id} Status</h2>

        <div className='space-x-2 text-sm font-semibold uppercase'>
          {priority && (
            <span className='rounded-full bg-yellow-500 px-3 py-1 text-yellow-50'>
              Priority
            </span>
          )}
          <span className='rounded-full bg-green-500 px-3 py-1 text-green-50'>
            {status}
          </span>
        </div>
      </div>

      <div className='space-y-2 bg-stone-200 p-6'>
        <h2 className='text-lg font-semibold'>Delivery Info</h2>

        <div className='flex flex-wrap justify-between gap-5'>
          <p>
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(
                  estimatedDelivery as Date,
                )} minutes left 😃`
              : 'Order has been delivered.'}
          </p>
          <p className='text-xs text-stone-500'>
            (Estimated delivery: {formatDate(estimatedDelivery as Date)})
          </p>
        </div>
      </div>

      <ul className='divide-y divide-stone-200 border-b border-t'>
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className='space-y-4 bg-stone-200 p-6'>
        <h2 className='text-lg font-semibold'>Receipt</h2>
        <p className='text-sm font-medium text-stone-600'>
          Subtotal: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className='text-sm font-medium text-stone-600'>
            Priority Fee: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className='font-bold'>
          Total: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  )
}

export default Order
