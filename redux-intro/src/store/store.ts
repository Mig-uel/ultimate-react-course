import { PayloadAction } from '@reduxjs/toolkit'
import type { BankState } from '../types'

const initialState: BankState = {
  balance: 0,
  loan: 0,
  loan_type: '',
}

function reducer(state = initialState, action: PayloadAction<number>) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload }
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload }
    case 'account/request_loan': {
      if (state.loan > 0) return state

      return { ...state, loan: action.payload }
    }
    case 'account/pay_loan': {
      return {
        ...state,
        loan: 0,
        loan_type: '',
        balance: state.balance - state.loan,
      }
    }

    default: {
      return state
    }
  }
}
