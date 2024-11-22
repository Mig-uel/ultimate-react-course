import { useEffect, useState } from 'react'
import type { MovieData } from '@/types/types'

const OMDb_URI = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_KEY
}`

export const useMovies = (query: string, cb?: () => void) => {
  const [movies, setMovies] = useState<MovieData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    cb?.()

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

        setMovies(data.Search)
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
      setMovies([])
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
