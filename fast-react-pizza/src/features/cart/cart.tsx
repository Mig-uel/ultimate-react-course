import { useAppDispatch, useAppSelector } from '../../hooks'
import { clearCart, getCartState } from './cartSlice'
import Button from '../../ui/Button'
import LinkButton from '../../ui/LinkButton'
import CartItem from './cart-item'
import EmptyCart from './empty-cart'

function Cart() {
  const cart = useAppSelector(getCartState)
  const username = useAppSelector((state) => state.user.username)
  const dispatch = useAppDispatch()

  if (!cart.length) return <EmptyCart />

  const handleClearCart = () => dispatch(clearCart())

  return (
    <div className='px-4 py-3'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>
        {username ? `Your cart, ${username}` : 'Your cart'}
      </h2>

      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className='mt-6 space-x-2'>
        <Button to='/order/new' type='small'>
          Order pizzas
        </Button>

        <Button type='secondary_small' onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  )
}

export default Cart
