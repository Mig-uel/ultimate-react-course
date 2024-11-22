import { useEffect, useState } from 'react'

const OMDb_URI = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_KEY
}`

export function useMovies<T>(query: string): {
  movies: T
  isLoading: boolean
  error: string
} {
  const [movies, setMovies] = useState<T>([] as T)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchMovies() {
      setError('')
      setIsLoading(true)

      try {
        const res = await fetch(`${OMDb_URI}&s=${query}`, {
          signal: controller.signal,
        })

        if (!res.ok) throw new Error('Something went wrong!')

        const data = await res.json()

        if (data.Response === 'False') {
          throw new Error(data.Error)
        }

        setMovies(data.Search as T)
        setError('')
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') return

          setError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (query.length < 3) {
      setMovies([] as T)
      setError('')
      return
    }

    fetchMovies()

    return () => {
      controller.abort()
    }
  }, [query])

  return { movies, isLoading, error }
}
