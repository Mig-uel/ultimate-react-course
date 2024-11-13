import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './button'

const SplitBillForm = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  const paidByFriend = bill && paidByUser <= bill ? bill - paidByUser : 0
  const [whoIsPaying, setWhoIsPaying] = useState('user')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!bill || !paidByUser) return

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💸 Bill Value</label>
      <input
        type='number'
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🤵 Your Expense</label>
      <input
        type='number'
        value={paidByUser}
        onChange={(e) => setPaidByUser(Number(e.target.value))}
      />

      <label>🧑‍🤝‍🧑{selectedFriend.name}&apos;s Expense</label>
      <input type='text' disabled value={paidByFriend} />

      <label>💸 Who&apos;s paying?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  )
}
export default SplitBillForm
SplitBillForm.propTypes = {
  selectedFriend: PropTypes.object,
  onSplitBill: PropTypes.func,
}
