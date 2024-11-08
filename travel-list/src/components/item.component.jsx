import PropTypes from 'prop-types'

const Item = ({ id, description, packed }) => {
  return <li>{description}</li>
}
export default Item

Item.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  packed: PropTypes.bool,
}
