import {
  AccountOperations,
  BalanceDisplay,
  CreateCustomer,
  Customer,
} from './components'
import { useAppSelector } from './hooks'

function App() {
  const name = useAppSelector((store) => store.customer?.full_name)

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>

      {!name && <CreateCustomer />}

      {name && (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  )
}

export default App
