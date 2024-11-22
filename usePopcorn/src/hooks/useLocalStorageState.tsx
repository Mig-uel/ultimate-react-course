import { useEffect, useState } from 'react'

export function useLocalStorageState<T>(
  initialState: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = JSON.parse(localStorage.getItem(key)!) as T

    return storedValue || initialState
  })

  // update local storage after watched state has been updated
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
