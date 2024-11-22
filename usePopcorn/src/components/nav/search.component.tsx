import { useKey } from '@/hooks/useKey'
import { useEffect, useRef } from 'react'

const Search = ({
  query,
  setQuery,
}: {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useKey('Enter', function () {
    if (document.activeElement === inputRef.current) return

    inputRef.current?.focus()
    setQuery('')
  })

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputRef}
    />
  )
}
export default Search
