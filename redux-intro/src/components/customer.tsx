import { useAppSelector } from '../hooks'

const Customer = () => {
  const name = useAppSelector((store) => store.customer?.full_name)

  return <h2>Welcome, {name}</h2>
}
export default Customer
