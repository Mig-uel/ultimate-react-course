import type { PayloadAction } from '@reduxjs/toolkit'
import type { AccountDispatchTypes, AccountState } from '../../types'

const initialStateAccount: AccountState = {
  balance: 0,
  loan: 0,
  loan_purpose: '',
}

export function accountReducer(
  state = initialStateAccount,
  action: PayloadAction<
    number | { amount: number; purpose: string } | null,
    AccountDispatchTypes
  >
) {
  switch (action.type) {
    case 'account/deposit':
      if (typeof action.payload === 'number')
        return { ...state, balance: state.balance + action.payload }
      break
    case 'account/withdraw':
      if (typeof action.payload === 'number')
        return { ...state, balance: state.balance - action.payload! }
      break
    case 'account/request_loan': {
      if (state.loan > 0) return state

      if (action.payload !== null && typeof action.payload === 'object')
        return {
          ...state,
          loan: action.payload.amount,
          loan_purpose: action.payload.purpose,
          balance: state.balance + action.payload.amount,
        }
      break
    }
    case 'account/pay_loan': {
      return {
        ...state,
        loan: 0,
        loan_purpose: '',
        balance: state.balance - state.loan,
      }
    }

    default: {
      return state
    }
  }
}
