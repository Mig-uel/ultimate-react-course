type Position = {
  lat: number
  lng: number
}

export type CityItem = {
  cityName: string
  country: string
  emoji: string
  date: Date
  notes: string
  position: Position
  id?: string
}

export type CitiesContextState = {
  cities: CityItem[]
  isLoading: boolean
  currentCity: CityItem | null
  getCity: (id: string) => Promise<void>
  addCity: (city: CityItem) => Promise<void>
  deleteCity: (id: string) => Promise<void>
}
