import { formatCurrency } from '../../utilities/helpers'
import type { CartItem } from '../../types'
import Button from '../../ui/Button'

function CartItem({ item }: { item: CartItem }) {
  const { name, quantity, totalPrice } = item

  return (
    <li className='space-y-2 py-3 sm:flex sm:items-center sm:justify-between sm:space-y-0'>
      <p>
        {quantity}&times; {name}
      </p>

      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <Button type='small'>Remove</Button>
      </div>
    </li>
  )
}

export default CartItem
