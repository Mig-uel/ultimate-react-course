import { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({ setItems }) => {
  const [qty, setQty] = useState(1)
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description) return

    const newItem = {
      description,
      qty,
      packed: false,
      id: Date.now(),
    }

    setItems((prevItemList) => {
      return [...prevItemList, newItem]
    })

    setQty(1)
    setDescription('')
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>

      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (curr, index) => index + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>

      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}
export default Form
Form.propTypes = {
  setItems: PropTypes.func,
}
