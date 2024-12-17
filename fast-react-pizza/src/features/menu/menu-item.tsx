import { formatCurrency } from '../../utilities/helpers'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addToCart, getCartState } from '../cart/cartSlice'
import Button from '../../ui/Button'
import type * as types from '../../types'
import RemoveItem from '../cart/remove-item'
import UpdateItemQty from '../cart/update-item-qty'

function MenuItem({ pizza }: { pizza: types.MenuItem }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza

  const dispatch = useAppDispatch()
  const cart = useAppSelector(getCartState)
  const isInCart = cart.find((item) => item.pizzaId === +id)

  const handleAddToCart = () =>
    dispatch(
      addToCart({
        name,
        pizzaId: +id,
        quantity: 1,
        totalPrice: unitPrice * 1,
        unitPrice,
      }),
    )

  return (
    <li className='flex gap-4 py-2'>
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />

      <div className='flex grow flex-col pt-0.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm capitalize italic text-stone-500'>
          {ingredients.join(', ')}
        </p>

        <div className='mt-auto flex items-center justify-between'>
          {!soldOut ? (
            <p className='text-sm'>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='text-sm font-medium uppercase text-stone-500'>
              Sold out
            </p>
          )}

          <div className='space-x-4'>
            {isInCart && (
              <>
                <UpdateItemQty pizzaId={+id} />
                <RemoveItem pizzaId={+id} />
              </>
            )}

            {!soldOut && !isInCart && (
              <Button type='small' onClick={handleAddToCart}>
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default MenuItem
