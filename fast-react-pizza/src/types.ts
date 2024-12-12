export type CartItem = {
  pizzaId: number
  name: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

export type Pizza = {
  id: string
  name: string
  unitPrice: number
  ingredients: string[]
  soldOut: boolean
  imageUrl: string
}

export type Order = {
  id: string
  customer: string
  phone: string
  address: string
  priority: boolean
  estimatedDelivery: Date | string
  cart: CartItem[]
  position: string
  orderPrice: number
  priorityPrice: number
}
