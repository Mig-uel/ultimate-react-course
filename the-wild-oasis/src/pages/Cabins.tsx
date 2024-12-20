import { useState } from 'react'
import { Button, Heading, Row } from '../ui'
import CabinTable from '../features/cabins/CabinTable'
import CabinForm from '../features/cabins/CabinForm'

const Cabins = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Cabins</Heading>

        <p>Filter/Sort Placeholder</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm((prev) => !prev)}>
          Add New Cabin
        </Button>

        {showForm && <CabinForm />}
      </Row>
    </>
  )
}
export default Cabins
