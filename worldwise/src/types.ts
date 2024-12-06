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

export type CitiesContextState = State & {
  getCity: (id: string) => Promise<void>
  addCity: (city: CityItem) => Promise<void>
  deleteCity: (id: string) => Promise<void>
}

// CITIES REDUCER
type Type =
  | 'cities/loaded'
  | 'cities/created'
  | 'cities/deleted'
  | 'loading'
  | 'rejected'
type Payload = CityItem[] | CityItem | string

export type State = {
  cities: CityItem[]
  isLoading: boolean
  currentCity: CityItem | null
  error: string | null
}

export type Action = {
  type: Type
  payload?: Payload
}
