import PropTypes from 'prop-types'

const Button = ({ children, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  )
}
export default Button
Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}
