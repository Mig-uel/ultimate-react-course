import { createContext, useContext } from 'react'
import styled from 'styled-components'
import { Tables } from '../supabase_types'

type CommonRowProps = {
  $columns: string
}

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`

const CommonRow = styled.div<CommonRowProps>`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`

const StyledBody = styled.section`
  margin: 0.4rem 0;
`

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`
const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`

const TableContext = createContext({
  cols: '',
})

// TABLE COMPOUND COMPONENT
const Table = ({
  cols,
  children,
}: {
  cols: string
  children: React.ReactNode
}) => {
  const value = {
    cols,
  }

  return (
    <TableContext.Provider value={value}>
      <StyledTable role='table'>{children}</StyledTable>
    </TableContext.Provider>
  )
}

const Header = ({ children }: { children: React.ReactNode }) => {
  const { cols } = useContext(TableContext)

  return (
    <StyledHeader role='row' $columns={cols} as='header'>
      {children}
    </StyledHeader>
  )
}

const Row = ({ children }: { children: React.ReactNode }) => {
  const { cols } = useContext(TableContext)

  return (
    <StyledRow role='row' $columns={cols}>
      {children}
    </StyledRow>
  )
}

const Body = ({
  data,
  render,
}: {
  data: Tables<'cabins'>[] | Tables<'bookings'>[]
  render: (cabin: Tables<'cabins'>) => React.ReactNode
}) => {
  if (!data.length) return <Empty>No cabins available at the moment</Empty>

  // @ts-expect-error fix type error later
  return <StyledBody>{data.map(render)}</StyledBody>
}

Table.Header = Header
Table.Row = Row
Table.Body = Body
Table.Footer = Footer

export default Table
