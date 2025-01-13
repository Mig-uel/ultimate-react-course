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
  id: string
  guestId: string
  startDate: string
  endDate: string
  numNights: number
  totalPrice: number
  numGuests: number
  status: string
  created_at: string
  cabins: Partial<Cabin>
}

export type Guest = {
  fullName: string
  nationality?: string
  email: string
  nationalID?: string
  countryFlag?: string
}
