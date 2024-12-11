import type { PayloadAction } from '@reduxjs/toolkit'

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
