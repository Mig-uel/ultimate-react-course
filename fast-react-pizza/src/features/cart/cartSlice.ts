import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import type { CartItem, CartState } from '../../types'

const initialState: CartState = {
  // cart: [],
  cart: [
    {
      name: 'Mediterranean',
      pizzaId: 12,
      quantity: 2,
      totalPrice: 32,
      unitPrice: 16,
    },
  ],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart(state, action: { payload: CartItem }) {
      // payload = new item
      state.cart.push(action.payload)
    },

    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },

    decreaseItemQty(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload)

      if (!item) return

      item.quantity--
      item.totalPrice = item.quantity * item.unitPrice
    },

    increaseItemQty(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload)

      if (!item) return

      item.quantity++
      item.totalPrice = item.quantity * item.unitPrice
    },

    clearCart(state) {
      state.cart = initialState.cart
    },
  },
})

export const {
  addToCart,
  clearCart,
  decreaseItemQty,
  deleteItem,
  increaseItemQty,
} = cartSlice.actions

export default cartSlice

export const getCartQty = (state: RootState) =>
  state.cart.cart.reduce((acc, item) => item.quantity + acc, 0)

export const getCartTotal = (state: RootState) =>
  state.cart.cart.reduce((acc: number, item) => item.totalPrice + acc, 0)
