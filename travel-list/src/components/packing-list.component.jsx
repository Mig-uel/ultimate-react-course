import { useState } from 'react'
import Item from './item.component'
import PropTypes from 'prop-types'

const PackingList = ({ items, setItems }) => {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems

  if (sortBy === 'input') sortedItems = items
  else if (sortBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
  } else if (sortBy === 'packed') {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))
  }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item {...item} key={item.id} setItems={setItems} />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by Input Order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by Packed Status</option>
        </select>
      </div>
    </div>
  )
}
export default PackingList

PackingList.propTypes = {
  items: PropTypes.array,
  setItems: PropTypes.func,
}
