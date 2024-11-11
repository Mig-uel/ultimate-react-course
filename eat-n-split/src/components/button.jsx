import PropTypes from 'prop-types'

const Button = ({ children }) => {
  return <button className='button'>{children}</button>
}
export default Button
Button.propTypes = {
  children: PropTypes.node,
}
