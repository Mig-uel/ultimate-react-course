import PropTypes from 'prop-types'
import { useState } from 'react'

const Item = ({ id, description, packed, qty, setItems }) => {
  const [isPacked, setIsPacked] = useState(packed)

  const handleCheck = () => setIsPacked((prev) => !prev)

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <li>
      <input type='checkbox' checked={isPacked} onChange={handleCheck} />

      <span
        style={
          isPacked
            ? {
                textDecoration: 'line-through',
              }
            : {}
        }
      >
        {qty} &times; {description}
      </span>

      <button onClick={() => handleDelete(id)}>❌</button>
    </li>
  )
}
export default Item

Item.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  packed: PropTypes.bool,
  qty: PropTypes.number,
  setItems: PropTypes.func,
}
