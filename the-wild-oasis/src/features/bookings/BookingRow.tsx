import { format } from 'date-fns'
import type { Tables } from '../../supabase_types'
import { Table } from '../../ui'

const BookingRow = ({
  booking,
}: {
  booking: Partial<Tables<'bookings'> & Tables<'cabins'> & Tables<'guests'>>
}) => {
  const {
    id: bookingID,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status, // @ts-expect-error fix later
    guests: { fullName: guestName, email },
    // @ts-expect-error fix later
    cabins: { name: cabinName },
  } = booking

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  }

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>{format(new Date(startDate), 'MMM dd yyyy')} &mdash; </Stacked>
    </Table.Row>
  )
}
export default BookingRow
