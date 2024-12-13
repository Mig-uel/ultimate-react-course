import { getOrderById } from '../../services/api_restaurant'
import type { Params } from 'react-router-dom'

const orderLoader = async ({ params }: { params: Params<'orderId'> }) => {
  return await getOrderById(params.orderId!)
}

export default orderLoader
