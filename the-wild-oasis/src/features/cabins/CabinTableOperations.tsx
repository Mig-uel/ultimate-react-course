import { Filter, SortBy, TableOperations } from '../../ui'

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No Discount' },
          { value: 'with-discount', label: 'With Discount' },
        ]}
      />

      <SortBy
        options={[
          { label: 'Name (A-Z)', value: 'name-asc' },
          {
            label: 'Name (Z-A)',
            value: 'name-desc',
          },
          {
            label: 'Price (low-high)',
            value: 'regularPrice-asc',
          },
          {
            label: 'Price (high-low)',
            value: 'regularPrice-desc',
          },
          {
            label: 'Capacity (low-high)',
            value: 'maxCapacity-asc',
          },
          {
            label: 'Capacity (high-low)',
            value: 'maxCapacity-desc',
          },
        ]}
      />
    </TableOperations>
  )
}
export default CabinTableOperations
