import type { PayloadAction } from '@reduxjs/toolkit'
import type { CustomerDispatchTypes, CustomerState } from '../../types'

const initialStateCustomer: CustomerState = {
  createdAt: '',
  full_name: '',
  nationalID: '',
}

export function customerReducer(
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
