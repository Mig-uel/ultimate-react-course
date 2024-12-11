import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { AccountState } from '../../types'

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loan_purpose: '',
  isLoading: false,
}

const deposit = createAsyncThunk(
  'account/deposit',
  async (payload: { amount: number; currency: string }) => {
    if (payload.currency === 'USD') return payload.amount

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${payload.amount}&from=${payload.currency}&to=USD`
    )

    const data = await res.json()

    return data.rates.USD
  }
)

const accountSlice = createSlice({
  name: 'account',
  initialState,

  reducers: {
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

  extraReducers: (builder) => {
    builder.addCase(deposit.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(deposit.fulfilled, (state, action) => {
      state.balance += action.payload
    })

    builder.addMatcher(deposit.settled, (state) => {
      state.isLoading = false
    })
  },
})

// ACTIONS
export { deposit }
export const { pay_loan, request_loan, withdraw } = accountSlice.actions

// REDUCER
export default accountSlice
