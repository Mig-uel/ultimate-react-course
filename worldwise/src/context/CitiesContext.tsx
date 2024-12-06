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
    case 'city/added':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, payload as CityItem],
        currentCity: payload as CityItem,
      }
    case 'city/deleted':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== payload),
        currentCity: null,
      }
    case 'city/loaded':
      return { ...state, isLoading: false, currentCity: payload as CityItem }
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
  const { cities, currentCity, error, isLoading } = state

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
            payload: 'There was an error loading the cities...',
          })
      }
    }

    fetchCities()
  }, [])

  const getCity = async (id: string) => {
    if (id === currentCity?.id) return

    dispatch({ type: 'loading' })

    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`)

      const data = await res.json()

      // set city
      dispatch({ type: 'city/loaded', payload: data })
    } catch (error) {
      console.log(error)

      if (error instanceof Error)
        dispatch({ type: 'rejected', payload: error.message })
      else
        dispatch({
          type: 'rejected',
          payload: 'There was an error loading the city...',
        })
    }
  }

  const addCity = async (city: CityItem) => {
    dispatch({ type: 'loading' })

    try {
      const res = await fetch(`${BASE_URL}/cities/`, {
        method: 'POST',
        body: JSON.stringify(city),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await res.json()

      // add city
      if (data) dispatch({ type: 'city/added', payload: data })
    } catch (error) {
      console.log(error)

      if (error instanceof Error)
        dispatch({ type: 'rejected', payload: error.message })
      else
        dispatch({
          type: 'rejected',
          payload: 'There was an error adding the city...',
        })
    }
  }

  const deleteCity = async (id: string) => {
    dispatch({ type: 'loading' })

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      })

      // delete city
      dispatch({ type: 'city/deleted', payload: id })
    } catch (error) {
      console.log(error)

      if (error instanceof Error)
        dispatch({ type: 'rejected', payload: error.message })
      else
        dispatch({
          type: 'rejected',
          payload: 'There was an error deleting the city...',
        })
    }
  }

  const value = {
    cities,
    isLoading,
    currentCity,
    getCity,
    addCity,
    deleteCity,
    error,
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
