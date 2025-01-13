export type Cabin = {
  id: string
  name: string
  maxCapacity: number
  regularPrice: number
  discount: number
  image: string
  description: string
}

export type Booking = {
  id: any
  created_at: any
  startDate: any
  endDate: any
  numNights: any
  numGuests: any
  totalPrice: any
  guestID: any
  cabinID: any
  cabins: Cabin[]
  status: 'checked-in' | 'checked-out' | 'unconfirmed'
}

export type Guest = {
  fullName: string
  nationality?: string
  email: string
  nationalID?: string
  countryFlag?: string
}
