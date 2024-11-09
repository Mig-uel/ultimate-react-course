import Item from './item.component'
import PropTypes from 'prop-types'

const PackingList = ({ items, setItems }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item {...item} key={item.id} setItems={setItems} />
        ))}
      </ul>
    </div>
  )
}
export default PackingList

PackingList.propTypes = {
  items: PropTypes.array,
  setItems: PropTypes.func,
}
