import { configureStore } from '@reduxjs/toolkit'
import accountSlice from './features/account/accountSlice'

import { customerReducer } from './features/customer/customerSlice'

const store = configureStore({
  reducer: {
    [accountSlice.name]: accountSlice.reducer,
    customer: customerReducer,
  },
})

// GET THE TYPE OF OUR STORE VARIABLE
export type AppStore = typeof store

// INFER THE `RootState` AND `AppDispatch` TYPES FROM THE STORE ITSELF
export type RootState = ReturnType<AppStore['getState']>

// INFERRED TYPES
export type AppDispatch = AppStore['dispatch']

export default store
