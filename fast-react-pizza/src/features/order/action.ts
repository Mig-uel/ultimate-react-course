import { type ActionFunctionArgs, redirect } from 'react-router-dom'
import { createOrder } from '../../services/api_restaurant'
import type { CartItem, FormOrderItem, OrderItem } from '../../types'

async function orderAction({ request }: ActionFunctionArgs) {
  const formData: FormData = await request.formData()

  const formDataObj = Object.fromEntries(formData.entries()) as Record<
    string,
    string
  >

  const cart = JSON.parse(formDataObj.cart) as CartItem[]
  const order: FormOrderItem = {
    address: formDataObj.address,
    cart,
    customer: formDataObj.customer,
    phone: formDataObj.phone,
    priority: formDataObj.priority === 'on',
  }

  const placedOrder = (await createOrder(order)) as OrderItem

  return redirect(`/order/${placedOrder.id}`)
}

export default orderAction
