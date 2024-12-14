import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { updateName } from './userSlice'
import Button from '../../ui/Button'

function CreateUser() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const usernameFromStore = useAppSelector((state) => state.user.username)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!username.trim() && !usernameFromStore) return

    dispatch(updateName(username || usernameFromStore))

    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>
        Welcome! Please enter your name:
      </p>

      <input
        type='text'
        placeholder={usernameFromStore ? usernameFromStore : 'John Doe'}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input mb-6 mt-2 w-72'
      />

      {usernameFromStore || username ? (
        <div>
          <Button buttonType='submit'>Start ordering</Button>
        </div>
      ) : !usernameFromStore && username ? (
        <div>
          <Button buttonType='submit'>Start ordering</Button>
        </div>
      ) : null}
    </form>
  )
}

export default CreateUser
