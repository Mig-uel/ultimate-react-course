import PropTypes from 'prop-types'

const Item = ({ description, packed, qty }) => {
  return (
    <li>
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
    </li>
  )
}
export default Item

Item.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  packed: PropTypes.bool,
  qty: PropTypes.number,
}
