import { combineReducers, createStore } from 'redux'

import type { PayloadAction } from '@reduxjs/toolkit'
import type {
  AccountDispatchTypes,
  AccountState,
  CustomerDispatchTypes,
  CustomerState,
} from '../types'
import { createCustomer } from './action-creators'

const initialStateAccount: AccountState = {
  balance: 0,
  loan: 0,
  loan_purpose: '',
}

const initialStateCustomer: CustomerState = {
  createdAt: '',
  full_name: '',
  nationalID: '',
}

function accountReducer(
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

function customerReducer(
  state = initialStateCustomer,
  {
    payload,
    type,
  }: PayloadAction<
    | string
    | { full_name: string; nationalID: string; createdAt: string }
    | null,
    CustomerDispatchTypes
  >
) {
  switch (type) {
    case 'customer/createCustomer': {
      if (typeof payload === 'object' && payload !== null)
        return {
          ...state,
          full_name: payload.full_name,
          nationalID: payload.nationalID,
          createdAt: payload.createdAt,
        }
      break
    }
    case 'customer/updateName': {
      if (typeof payload === 'string') return { ...state, full_name: payload }
      break
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
})

const store = createStore(rootReducer)

store.dispatch(createCustomer({ full_name: 'Miguel', nationalID: '099292999' }))
