import { createContext, useContext, useEffect, useState } from 'react'
import type { CitiesContextState, CityItem } from '../types'

const BASE_URL = 'http://localhost:3001'

const CitiesContext = createContext<CitiesContextState>({
  cities: [],
  isLoading: false,
  currentCity: null,
  getCity: async () => {},
})

const CitiesProvider = ({ children }: { children: React.ReactNode }) => {
  const [cities, setCities] = useState<CityItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentCity, setCurrentCity] = useState<CityItem | null>(null)

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true)

        const res = await fetch(BASE_URL + '/cities')

        const data = await res.json()

        setCities(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
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

  const value = {
    cities,
    isLoading,
    currentCity,
    getCity,
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
