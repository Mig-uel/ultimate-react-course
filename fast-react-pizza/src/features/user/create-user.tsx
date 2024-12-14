import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks'
import { updateName } from './userSlice'
import Button from '../../ui/Button'

function CreateUser() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!username.trim()) return

    dispatch(updateName(username))

    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>
        Welcome! Please enter your name:
      </p>

      <input
        type='text'
        placeholder='Johnny Slices'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input mb-6 mt-2 w-72'
      />

      <div>
        {username.trim() && <Button buttonType='submit'>Go to menu</Button>}
      </div>
    </form>
  )
}

export default CreateUser
