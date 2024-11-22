import { useEffect, useRef } from 'react'

const Search = ({
  query,
  setQuery,
}: {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (document.activeElement === inputRef.current) return

      if (e.code === 'Enter') {
        inputRef.current?.focus()
        setQuery('')
      }
    }

    document.addEventListener('keydown', callback)

    return () => {
      document.removeEventListener('keydown', callback)
    }
  }, [setQuery])

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
