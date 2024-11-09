import PropTypes from 'prop-types'

const Item = ({ id, description, packed, qty, setItems }) => {
  const handleCheck = (id) =>
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) return { ...item, packed: !item.packed }

        return item
      })
    })

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <li>
      <input
        type='checkbox'
        defaultChecked={packed}
        onChange={() => handleCheck(id)}
      />

      <span
        style={
          packed
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
