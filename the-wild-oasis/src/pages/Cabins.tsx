import { Heading, Row } from '../ui'
import AddCabin from '../features/cabins/AddCabin'
import CabinTable from '../features/cabins/CabinTable'

const Cabins = () => {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Cabins</Heading>

        <p>Filter/Sort Placeholder</p>
      </Row>

      <Row>
        <CabinTable />

        <AddCabin />
      </Row>
    </>
  )
}
export default Cabins
