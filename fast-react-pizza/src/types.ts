export type CartItem = {
  pizzaId: number
  name: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

export type MenuItem = {
  id: string
  name: string
  unitPrice: number
  ingredients: string[]
  soldOut: boolean
  imageUrl: string
}

export type OrderItem = {
  id: string
  customer: string
  phone: string
  address: string
  priority: string | boolean
  estimatedDelivery: Date | string
  cart: CartItem[]
  position: string
  orderPrice: number
  priorityPrice: number
  status: boolean
}

export type FormOrderItem = {
  customer: string
  phone: string
  address: string
  priority: string | boolean
  cart: CartItem[]
}
