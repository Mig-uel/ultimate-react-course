import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchOrder = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('IIDSAT')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!query) return

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
      />
    </form>
  )
}
export default SearchOrder
