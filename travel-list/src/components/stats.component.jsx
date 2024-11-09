import PropTypes from 'prop-types'

const Stats = ({ itemLength, percentage, numOfItemsPacked }) => {
  if (!itemLength)
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    )

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You got everything packed! Ready to go ✈️'
          : ` You have ${itemLength} items on your list, and you already packed ${numOfItemsPacked} items (${percentage}%)`}
      </em>
    </footer>
  )
}
export default Stats
Stats.propTypes = {
  itemLength: PropTypes.number,
  percentage: PropTypes.number,
  numOfItemsPacked: PropTypes.number,
}
