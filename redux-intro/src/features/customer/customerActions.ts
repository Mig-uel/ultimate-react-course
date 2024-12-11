import type { PayloadAction } from '@reduxjs/toolkit'

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
