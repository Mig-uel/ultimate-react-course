import { type ActionFunctionArgs, redirect } from 'react-router-dom'
import { createOrder } from '../../services/api_restaurant'
import type { CartItem, FormOrderItem, OrderItem } from '../../types'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  )

async function orderAction({ request }: ActionFunctionArgs) {
  const errors: Record<string, string> = {}
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

  if (!isValidPhone(order.phone)) {
    errors.phone = 'Invalid phone number.'
  }

  if (Object.keys(errors).length > 0) return errors

  const placedOrder = (await createOrder(order)) as OrderItem

  return redirect(`/order/${placedOrder.id}`)
}

export default orderAction
