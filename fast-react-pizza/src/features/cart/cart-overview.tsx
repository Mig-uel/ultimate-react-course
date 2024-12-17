import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { getCartQty, getCartTotal } from './cartSlice'
import { formatCurrency } from '../../utilities/helpers'

function CartOverview() {
  const itemsQty = useAppSelector(getCartQty)
  const cartTotal = useAppSelector(getCartTotal)

  if (!itemsQty) return null

  return (
    <div className='flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6'>
      <p className='space-x-4 text-sm font-semibold text-stone-300 md:text-base'>
        <span>
          {itemsQty} {itemsQty > 1 ? 'pizzas' : 'pizza'}
        </span>

        <span>{formatCurrency(cartTotal)}</span>
      </p>

      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview
