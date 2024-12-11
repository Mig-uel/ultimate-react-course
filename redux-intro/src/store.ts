import { thunk } from 'redux-thunk'
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { accountReducer } from './features/account/accountSlice'
import { customerReducer } from './features/customer/customerSlice'

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

// GET THE TYPE OF OUR STORE VARIABLE
export type AppStore = typeof store

// INFER THE `RootState` AND `AppDispatch` TYPES FROM THE STORE ITSELF
export type RootState = ReturnType<AppStore['getState']>

// INFERRED TYPES
export type AppDispatch = AppStore['dispatch']
