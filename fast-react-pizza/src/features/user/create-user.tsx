import { useState } from 'react'
import Button from '../../ui/Button'

function CreateUser() {
  const [username, setUsername] = useState('s')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>
        Welcome! Please enter your name:
      </p>

      <input
        type='text'
        placeholder='John Doe'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input mb-6 mt-2 w-72'
      />

      {username !== '' && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  )
}

export default CreateUser
