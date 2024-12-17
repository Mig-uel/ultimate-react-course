import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import type { CartItem, CartState } from '../../types'

const initialState: CartState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart(state, action: { payload: CartItem }) {
      // payload = new item
      state.cart.push(action.payload)
    },

    removeFromCart(state, action: { payload: number }) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },

    decreaseItemQty(state, action: { payload: number }) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload)

      if (!item) return

      item.quantity--
      item.totalPrice = item.quantity * item.unitPrice
    },

    increaseItemQty(state, action: { payload: number }) {
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
  removeFromCart,
  increaseItemQty,
} = cartSlice.actions

export default cartSlice

/* Cart Selectors */
export const getCartQty = (state: RootState) =>
  state.cart.cart.reduce((acc, item) => item.quantity + acc, 0)

export const getCartTotal = (state: RootState) =>
  state.cart.cart.reduce((acc: number, item) => item.totalPrice + acc, 0)

export const getCartState = (state: RootState) => state.cart.cart

export const getItemQtyById = (state: RootState, pizzaId: number) =>
  state.cart.cart.find((item) => item.pizzaId === pizzaId)?.quantity || 0
