import { formatCurrency } from '../formatCurrency'
import { useAppSelector } from '../hooks'

const BalanceDisplay = () => {
  const balance = useAppSelector((store) => store.account?.balance)

  return <div className='balance'>{formatCurrency(balance!)}</div>
}
export default BalanceDisplay
