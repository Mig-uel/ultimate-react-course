import { useAppDispatch } from '../../hooks'
import { removeFromCart } from './cartSlice'
import Button from '../../ui/Button'

const RemoveItem = ({ pizzaId }: { pizzaId: number }) => {
  const dispatch = useAppDispatch()
  const handleRemoveItem = () => dispatch(removeFromCart(pizzaId))

  return (
    <Button type='small' onClick={handleRemoveItem}>
      Remove
    </Button>
  )
}
export default RemoveItem
