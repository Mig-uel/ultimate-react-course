import { formatCurrency } from '../formatCurrency'

const BalanceDisplay = () => {
  return <div className='balance'>{formatCurrency(123456)}</div>
}
export default BalanceDisplay
