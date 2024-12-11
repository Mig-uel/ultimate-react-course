import { configureStore } from '@reduxjs/toolkit'
import accountSlice from './features/account/accountSlice'
import customerSlice from './features/customer/customerSlice'

const store = configureStore({
  reducer: {
    [accountSlice.name]: accountSlice.reducer,
    [customerSlice.name]: customerSlice.reducer,
  },
})

// GET THE TYPE OF OUR STORE VARIABLE
export type AppStore = typeof store

// INFER THE `RootState` AND `AppDispatch` TYPES FROM THE STORE ITSELF
export type RootState = ReturnType<AppStore['getState']>

// INFERRED TYPES
export type AppDispatch = AppStore['dispatch']

export default store
