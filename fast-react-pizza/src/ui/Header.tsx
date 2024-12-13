import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

const Header = () => {
  return (
    <header className='flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6'>
      <Link className='tracking-widest' to='/'>
        Fast React Pizza Co.
      </Link>

      <div className='flex items-center gap-4'>
        <SearchOrder />

        <Username />
      </div>
    </header>
  )
}
export default Header
