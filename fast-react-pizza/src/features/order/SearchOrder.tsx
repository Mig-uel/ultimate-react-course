import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchOrder = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!query.trim()) return

    navigate(`/order/${query}`)

    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={query}
        onChange={handleChange}
        placeholder='Search order #'
        className='w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm uppercase transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-48 sm:focus:w-72'
      />
    </form>
  )
}
export default SearchOrder
