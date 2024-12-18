import { useFetcher } from 'react-router-dom'
import Button from '../../ui/Button'
import type { OrderItem } from '../../types'

const UpdateOrder = ({ order }: { order: OrderItem }) => {
  const fetcher = useFetcher()

  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <Button type='primary' buttonType='submit'>
        Make Priority
      </Button>
    </fetcher.Form>
  )
}
export default UpdateOrder
