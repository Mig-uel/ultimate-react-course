import { useSearchParams } from 'react-router-dom'
import { Select } from './'

const SortBy = ({
  options,
}: {
  options: { label: string; value: string }[]
}) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('sortBy', e.target.value)

    setSearchParams(searchParams)
  }

  return (
    <Select
      options={options}
      type='white'
      onChange={handleChange}
      value={searchParams.get('sortBy') || 'a-z'}
    />
  )
}
export default SortBy
