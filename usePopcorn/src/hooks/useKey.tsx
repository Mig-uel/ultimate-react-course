import { useEffect } from 'react'

export function useKey(key: string, action: () => void) {
  // escape key closes movie details
  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action()
      }
    }

    document.addEventListener('keydown', callback)

    return () => {
      document.removeEventListener('keydown', callback)
    }
  }, [key, action])
}
