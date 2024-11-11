import PropTypes from 'prop-types'

const Friend = ({ name, image, balance }) => {
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

      <button className='button'>Select</button>
    </li>
  )
}
export default Friend
Friend.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  balance: PropTypes.number,
}
