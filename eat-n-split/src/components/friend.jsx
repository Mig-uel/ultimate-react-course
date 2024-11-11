import PropTypes from 'prop-types'

const Friend = ({ name, image, balance }) => {
  return <li>{name}</li>
}
export default Friend
Friend.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  balance: PropTypes.number,
}
