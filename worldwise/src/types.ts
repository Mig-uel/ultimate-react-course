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
  | 'city/added'
  | 'city/deleted'
  | 'city/loaded'
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

// AUTH REDUCER
export type User = {
  email: string
  password: string
  name: string
  avatar: string
}
export type AuthState = {
  user: User | null
  isAuthenticated: boolean
}
export type AuthContextState = AuthState & {
  login: (email: string, password: string) => void
  logout: () => void
}
type AuthLogoutAction = {
  type: 'logout'
}
type AuthLoginAction = {
  type: 'login'
  payload: User
}

export type AuthAction = AuthLoginAction | AuthLogoutAction
