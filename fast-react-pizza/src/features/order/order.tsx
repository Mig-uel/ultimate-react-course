import { useLoaderData } from 'react-router-dom'
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utilities/helpers'
import type * as types from '../../types'

function Order() {
  const order: types.OrderItem = useLoaderData()

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { status, priority, priorityPrice, orderPrice, estimatedDelivery } =
    order

  const deliveryIn = calcMinutesLeft(estimatedDelivery as Date)

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(
                estimatedDelivery as Date
              )} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery as Date)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  )
}

export default Order
