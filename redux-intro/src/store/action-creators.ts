import type { PayloadAction } from '@reduxjs/toolkit'

/* ACCOUNT ACTION CREATORS */
export const deposit = (
  payload: number
): PayloadAction<number, 'account/deposit'> => ({
  payload,
  type: 'account/deposit',
})

export const withdraw = (
  payload: number
): PayloadAction<number, 'account/withdraw'> => ({
  payload,
  type: 'account/withdraw',
})

export const request_loan = (payload: {
  amount: number
  purpose: string
}): PayloadAction<
  { amount: number; purpose: string },
  'account/request_loan'
> => ({ payload, type: 'account/request_loan' })

export const pay_loan = (): PayloadAction<null, 'account/pay_loan'> => ({
  payload: null,
  type: 'account/pay_loan',
})

/* CUSTOMER ACTION CREATORS */
export const createCustomer = (payload: {
  full_name: string
  nationalID: string
}): PayloadAction<
  {
    full_name: string
    nationalID: string
    createdAt: string
  },
  'customer/createCustomer'
> => ({
  type: 'customer/createCustomer',
  payload: { ...payload, createdAt: new Date().toISOString() },
})

export const updateName = (
  payload: string
): PayloadAction<string, 'customer/update_name'> => ({
  payload,
  type: 'customer/update_name',
})
