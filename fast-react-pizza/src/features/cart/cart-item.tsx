import { formatCurrency } from '../../utilities/helpers'
import type { CartItem } from '../../types'
import RemoveItem from './remove-item'

function CartItem({ item }: { item: CartItem }) {
  const { name, quantity, totalPrice, pizzaId } = item

  return (
    <li className='space-y-2 py-3 sm:flex sm:items-center sm:justify-between sm:space-y-0'>
      <p>
        {quantity}&times; {name}
      </p>

      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
      </div>

      <RemoveItem pizzaId={pizzaId} />
    </li>
  )
}

export default CartItem
