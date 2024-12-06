import { createContext, useContext, useEffect, useReducer } from 'react'
import type { Action, CitiesContextState, CityItem, State } from '../types'

const BASE_URL = 'http://localhost:3001'

const CitiesContext = createContext<CitiesContextState>({
  cities: [],
  isLoading: false,
  currentCity: null,
  getCity: async () => {},
  addCity: async () => {},
  deleteCity: async () => {},
  error: null,
})

const initialState: State = {
  cities: [],
  isLoading: false,
  currentCity: null,
  error: null,
}
const reducer = (state: State, { payload, type }: Action): State => {
  switch (type) {
    case 'cities/loaded':
      return { ...state, isLoading: false, cities: payload as CityItem[] }
    case 'cities/created':
      return { ...state }
    case 'cities/deleted':
      return { ...state }
    case 'loading':
      return { ...state, isLoading: true }
    case 'rejected':
      return { ...state, isLoading: false, error: payload as string }
    default: {
      const never: never = type
      throw new Error(`Type '${never}' is an invalid reducer action type`)
    }
  }
}

const CitiesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { cities, currentCity, isLoading } = state

  useEffect(() => {
    async function fetchCities() {
      // set loading to true
      dispatch({ type: 'loading' })

      try {
        const res = await fetch(BASE_URL + '/cities')

        const data = await res.json()

        // set cities
        dispatch({ type: 'cities/loaded', payload: data })
      } catch (error) {
        console.log(error)

        if (error instanceof Error)
          dispatch({ type: 'rejected', payload: error.message })
        else
          dispatch({
            type: 'rejected',
            payload: 'There was an error loading the data...',
          })
      }
    }

    fetchCities()
  }, [])

  const getCity = async (id: string) => {
    try {
      setIsLoading(true)

      const res = await fetch(`${BASE_URL}/cities/${id}`)

      const data = await res.json()

      setCurrentCity(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const addCity = async (city: CityItem) => {
    try {
      setIsLoading(true)

      const res = await fetch(`${BASE_URL}/cities/`, {
        method: 'POST',
        body: JSON.stringify(city),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await res.json()

      if (data) setCities((prev) => [...prev, data])
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteCity = async (id: string) => {
    try {
      setIsLoading(true)

      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      })

      setCities((prev) => prev.filter((city) => city.id !== id))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const value = {
    cities,
    isLoading,
    currentCity,
    getCity,
    addCity,
    deleteCity,
  }

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  )
}

const useCitiesContext = () => {
  const context = useContext(CitiesContext)

  if (!context || context === undefined)
    throw new Error('Cannot access CitiesContext outside of children!')

  return context
}

export { CitiesProvider, useCitiesContext }
