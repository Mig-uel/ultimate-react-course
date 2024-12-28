import { Heading, Row } from '../ui'
import AddCabin from '../features/cabins/AddCabin'
import CabinTable from '../features/cabins/CabinTable'
import CabinTableOperations from '../features/cabins/CabinTableOperations'

const Cabins = () => {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Cabins</Heading>

        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />

        <AddCabin />
      </Row>
    </>
  )
}
export default Cabins
