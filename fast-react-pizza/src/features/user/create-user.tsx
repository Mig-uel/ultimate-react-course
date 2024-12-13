import { useState } from 'react'

function CreateUser() {
  const [username, setUsername] = useState('')

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
        className='w-72 p-2'
      />

      {username !== '' && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  )
}

export default CreateUser
