import { useAppSelector } from '../../hooks'

const Username = () => {
  const username = useAppSelector((state) => state.user.username)

  if (!username.trim()) return null

  return (
    <div className='hidden text-sm font-semibold uppercase md:block'>
      {username}
    </div>
  )
}
export default Username
