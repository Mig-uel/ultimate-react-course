import { createSlice } from '@reduxjs/toolkit'
import type { CustomerState } from '../../types'

const initialState: CustomerState = {
  createdAt: '',
  full_name: '',
  nationalID: '',
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,

  reducers: {
    createCustomer(
      state,
      action: { payload: { full_name: string; nationalID: string } }
    ) {
      state.createdAt = new Date().toISOString()
      state.full_name = action.payload.full_name
      state.nationalID = action.payload.nationalID
    },

    updateName(state, action: { payload: { full_name: string } }) {
      state.full_name = action.payload.full_name
    },
  },
})

export const { createCustomer, updateName } = customerSlice.actions
export default customerSlice
