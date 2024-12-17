import { useAppDispatch, useAppSelector } from '../../hooks'
import Button from '../../ui/Button'
import { decreaseItemQty, getItemQtyById, increaseItemQty } from './cartSlice'

const UpdateItemQty = ({ pizzaId }: { pizzaId: number }) => {
  const dispatch = useAppDispatch()
  const itemQty = useAppSelector((state) => getItemQtyById(state, pizzaId))

  const handleDecrease = () => dispatch(decreaseItemQty(pizzaId))
  const handleIncrease = () => dispatch(increaseItemQty(pizzaId))

  return (
    <div className='inline space-x-5'>
      {itemQty > 1 && (
        <Button type='rounded' onClick={handleDecrease}>
          -
        </Button>
      )}

      <span>{itemQty}</span>

      <Button type='rounded' onClick={handleIncrease}>
        +
      </Button>
    </div>
  )
}
export default UpdateItemQty
