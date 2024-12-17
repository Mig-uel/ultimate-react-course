import { formatCurrency } from '../../utilities/helpers'
import type { CartItem } from '../../types'
import RemoveItem from './remove-item'
import UpdateItemQty from './update-item-qty'

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

      <div className='space-x-4'>
        <UpdateItemQty pizzaId={pizzaId} />
        <RemoveItem pizzaId={pizzaId} />
      </div>
    </li>
  )
}

export default CartItem
