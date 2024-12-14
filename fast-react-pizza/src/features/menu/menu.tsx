import { useLoaderData } from 'react-router-dom'
import MenuItem from './menu-item'
import type * as types from '../../types'

function Menu() {
  const menu: types.MenuItem[] = useLoaderData()

  return (
    <ul className='divide-y divide-stone-200 px-2'>
      {menu.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  )
}

export default Menu
