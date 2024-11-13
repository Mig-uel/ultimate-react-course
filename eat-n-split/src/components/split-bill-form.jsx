import PropTypes from 'prop-types'
import Button from './button'

const SplitBillForm = ({ selectedFriend }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💸 Bill Value</label>
      <input type='text' />

      <label>🤵 Your Expense</label>
      <input type='text' />

      <label>🧑‍🤝‍🧑X&apos;s Expense</label>
      <input type='text' disabled />

      <label>💸 Who&apos;s paying?</label>
      <select>
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
}
