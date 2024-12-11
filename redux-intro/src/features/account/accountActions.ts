import { RootState } from '../../store'
import type { PayloadAction, ThunkAction } from '@reduxjs/toolkit'

/* ACCOUNT ACTION CREATORS */
export const deposit = (
  payload: number,
  currency: 'USD' | 'GBP' | 'EUR'
):
  | PayloadAction<number, 'account/deposit'>
  | ThunkAction<
      void,
      RootState,
      unknown,
      | {
          payload: number
          type: 'account/deposit'
        }
      | {
          type: 'account/converting'
        }
    > => {
  if (currency === 'USD')
    return {
      payload,
      type: 'account/deposit',
    }

  return async (dispatch, getState) => {
    dispatch({ type: 'account/converting' })

    // API CALL
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${payload}&from=${currency}&to=USD`
    )

    const data = await res.json()

    const convertedRate = data.rates.USD

    // RETURN ACTION
    dispatch({
      payload: convertedRate,
      type: 'account/deposit',
    })
  }
}

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
