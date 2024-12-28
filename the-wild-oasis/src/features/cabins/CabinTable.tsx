import { useCabins } from './useCabins'
import CabinRow from './CabinRow'
import { Menus, Spinner, Table } from '../../ui/'
import { HiTableCells } from 'react-icons/hi2'
import { Tables } from '../../supabase_types'
import { useSearchParams } from 'react-router-dom'

const CabinTable = () => {
  const { cabins, isLoading } = useCabins()
  const [searchParams] = useSearchParams()

  if (isLoading) return <Spinner />

  const filterValue = searchParams.get('discount') || 'all'

  let filteredCabins

  if (filterValue == 'all') filteredCabins = cabins
  if (filterValue === 'no-discount')
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0)
  else if (filterValue === 'with-discount')
    filteredCabins = cabins?.filter((cabin) => cabin.discount)

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
          data={filteredCabins as Tables<'cabins'>[]}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  )
}
export default CabinTable
