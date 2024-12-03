type Position = {
  lat: number
  lng: number
}

export type CityItem = {
  cityName: string
  country: string
  emoji: string
  date: string
  notes: string
  position: Position
  id: string
}
