import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import {
  deposit,
  pay_loan,
  request_loan,
  withdraw,
} from '../features/account/accountActions'

function AccountOperations() {
  const dispatch = useAppDispatch()
  const account = useAppSelector((store) => store.account)

  const isLoanActive = account?.loan && account?.loan > 0

  const [depositAmount, setDepositAmount] = useState<number | string>('')
  const [withdrawalAmount, setWithdrawalAmount] = useState<number | string>('')
  const [loanAmount, setLoanAmount] = useState<number | string>('')
  const [loanPurpose, setLoanPurpose] = useState('')
  const [currency, setCurrency] = useState('USD')

  function handleDeposit() {
    if (
      !depositAmount ||
      typeof depositAmount === 'string' ||
      depositAmount < 0
    ) {
      setDepositAmount('USD')
      return
    }

    dispatch(deposit(depositAmount, currency as 'USD' | 'EUR' | 'GBP'))

    setDepositAmount('')
    setCurrency('USD')
  }

  function handleWithdrawal() {
    if (!withdrawalAmount || typeof withdrawalAmount === 'string') return

    dispatch(withdraw(withdrawalAmount))

    setWithdrawalAmount('')
  }

  function handleRequestLoan() {
    if (typeof loanAmount === 'string' || !loanAmount || !loanPurpose) return

    const loan = {
      amount: loanAmount,
      purpose: loanPurpose,
    }

    dispatch(request_loan(loan))

    setLoanAmount('')
    setLoanPurpose('')
  }

  function handlePayLoan() {
    dispatch(pay_loan())
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className='inputs'>
        <div>
          <label htmlFor='deposit'>Deposit</label>
          <input
            id='deposit'
            type='number'
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
            min={0}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value='USD'>US Dollar</option>
            <option value='EUR'>Euro</option>
            <option value='GBP'>British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit</button>
        </div>

        <div>
          <label htmlFor='withdraw'>Withdraw</label>
          <input
            id='withdraw'
            type='number'
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>Withdraw</button>
        </div>

        {!isLoanActive ? (
          <div>
            <label>Request Loan</label>
            <div>
              <label htmlFor='loan'>Loan Amount</label>
              <input
                id='loan'
                type='number'
                value={loanAmount}
                onChange={(e) => setLoanAmount(+e.target.value)}
              />

              <label htmlFor='purpose'>Loan Purpose</label>
              <input
                id='purpose'
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
                placeholder='Loan purpose'
              />
              <button onClick={handleRequestLoan}>Request Loan</button>
            </div>
          </div>
        ) : (
          <></>
        )}

        {isLoanActive ? (
          <div>
            <span>
              Pay back ${account.loan} ({account.loan_purpose})
            </span>
            <button onClick={handlePayLoan}>Pay Loan</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default AccountOperations
