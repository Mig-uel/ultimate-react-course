import { useCabins } from './useCabins'
import CabinRow from './CabinRow'
import { Menus, Spinner, Table } from '../../ui/'
import { HiTableCells } from 'react-icons/hi2'
import { Tables } from '../../supabase_types'

const CabinTable = () => {
  const { cabins, isLoading } = useCabins()

  if (isLoading) return <Spinner />

  return (
    <Menus>
      <Table cols='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div>
            <HiTableCells />
          </div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={cabins as Tables<'cabins'>[]}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  )
}
export default CabinTable
