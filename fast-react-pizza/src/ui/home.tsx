import CreateUser from '../features/user/create-user'
import { useAppSelector } from '../hooks'
import Button from './Button'

function Home() {
  const username = useAppSelector((state) => state.user.username)

  return (
    <div className='my-10 px-4 text-center md:my-16'>
      <h1 className='mb-8 text-xl font-semibold md:text-3xl'>
        The Best Pizza.
        <br />
        <span className='text-yellow-500'>
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username ? (
        <Button to='/menu'>Continue ordering, {username}</Button>
      ) : (
        <CreateUser />
      )}
    </div>
  )
}

export default Home
