import BookingTable from '../features/bookings/BookingTable'
import { Heading, Row } from '../ui'

const Bookings = () => {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All Bookings</Heading>

        <p>placeholder</p>
      </Row>

      <BookingTable />
    </>
  )
}
export default Bookings
