import Button from './button'

const SplitBillForm = () => {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>

      <label>💸 Bill Value</label>
      <input type='text' />

      <label>🤵 Your Expense</label>
      <input type='text' />

      <label>🧑‍🤝‍🧑X&apos;s Expense</label>
      <input type='text' disabled />

      <label>💸 Who&apos;s paying?</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>Friend</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  )
}
export default SplitBillForm
