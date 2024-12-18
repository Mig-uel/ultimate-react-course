import { useFetcher, useLoaderData } from 'react-router-dom'
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utilities/helpers'
import OrderItem from './order-item'
import type * as types from '../../types'
import { useEffect } from 'react'
import UpdateOrder from './update-order'

function Order() {
  const order: types.OrderItem = useLoaderData()

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order

  const fetcher = useFetcher<types.MenuItem[]>()

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu')
  }, [fetcher])

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
          <OrderItem
            isLoadingIngredients={fetcher.state === 'loading'}
            item={item}
            key={item.pizzaId}
            ingredients={
              fetcher.data?.find((el) => +el.id === item.pizzaId)
                ?.ingredients || []
            }
          />
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

      {!priority && <UpdateOrder order={order} />}
    </div>
  )
}

export default Order
