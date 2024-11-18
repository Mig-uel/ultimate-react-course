import { useState } from 'react'

const Search = ({
  query,
  setQuery,
}: {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}
export default Search
