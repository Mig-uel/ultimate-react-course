import { createSlice } from '@reduxjs/toolkit'
import type { AccountState } from '../../types'

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loan_purpose: '',
  isLoading: false,
}

const accountSlice = createSlice({
  name: 'account',
  initialState,

  reducers: {
    deposit(state, action: { payload: number }) {
      state.balance += action.payload
    },

    withdraw(state, action: { payload: number }) {
      state.balance -= action.payload
    },

    request_loan(
      state,
      action: {
        payload: {
          amount: number
          purpose: string
        }
      }
    ) {
      if (state.loan > 0) return

      state.loan = action.payload.amount
      state.loan_purpose = action.payload.purpose
      state.balance += action.payload.amount
    },

    pay_loan(state) {
      state.balance -= state.loan
      state.loan = 0
      state.loan_purpose = ''
    },
  },
})

// actions
export const { deposit, pay_loan, request_loan, withdraw } =
  accountSlice.actions

// reducer
export default accountSlice
