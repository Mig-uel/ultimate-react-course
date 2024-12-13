import { getOrderById } from '../../services/api_restaurant'
import type { Params } from 'react-router-dom'

export const orderLoader = async ({
  params,
}: {
  params: Params<'orderId'>
}) => {
  return await getOrderById(params.orderId!)
}
