import { formatCurrency } from '../../utilities/helpers'
import type { CartItem, MenuItem } from '../../types'

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: {
  item: CartItem
  isLoadingIngredients: boolean
  ingredients: MenuItem['ingredients'] | []
}) {
  const { quantity, name, totalPrice } = item

  return (
    <li className='py-3'>
      <div className='flex items-center justify-between gap-4 text-sm'>
        <p>
          <span className='font-bold'>{quantity}&times;</span> {name}
        </p>
        <p className='font-bold'>{formatCurrency(totalPrice)}</p>
      </div>
      <p className='text-sm capitalize italic text-stone-500'>
        {isLoadingIngredients
          ? 'Loading ingredients...'
          : ingredients.join(', ')}
      </p>
    </li>
  )
}

export default OrderItem
