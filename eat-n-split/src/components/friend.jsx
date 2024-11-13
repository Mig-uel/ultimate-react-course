import PropTypes from 'prop-types'
import Button from './button'

const Friend = ({ id, name, image, balance, onSelect }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance > 0 ? (
        <p className='green'>
          {name} owes you ${balance}
        </p>
      ) : balance === 0 ? (
        <p>You and {name} are even</p>
      ) : (
        <p className='red'>
          You owe {name} ${Math.abs(balance)}
        </p>
      )}

      <Button onClick={() => onSelect(id)}>Select</Button>
    </li>
  )
}
export default Friend
Friend.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  balance: PropTypes.number,
  onSelect: PropTypes.func,
}
