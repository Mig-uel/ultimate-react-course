import { useSearchParams } from 'react-router-dom'
import styled, { css } from 'styled-components'

type FilterButtonProps = {
  $active?: boolean
}

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`

const FilterButton = styled.button<FilterButtonProps>`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`
const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleClick = (val: string) => {
    searchParams.set('discount', val)

    setSearchParams(searchParams)
  }

  return (
    <StyledFilter>
      <FilterButton
        onClick={handleClick.bind(null, 'all')}
        $active={searchParams.get('discount') === 'all'}
      >
        All
      </FilterButton>

      <FilterButton
        onClick={handleClick.bind(null, 'no-discount')}
        $active={searchParams.get('discount') === 'no-discount'}
      >
        No Discount
      </FilterButton>

      <FilterButton
        onClick={handleClick.bind(null, 'with-discount')}
        $active={searchParams.get('discount') === 'with-discount'}
      >
        With Discount
      </FilterButton>
    </StyledFilter>
  )
}
export default Filter
