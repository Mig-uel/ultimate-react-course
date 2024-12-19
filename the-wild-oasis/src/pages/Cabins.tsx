import CabinTable from '../features/cabins/CabinTable'
import { Heading, Row } from '../ui'

const Cabins = () => {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Cabins</Heading>

        <p>Filter/Sort Placeholder</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  )
}
export default Cabins
