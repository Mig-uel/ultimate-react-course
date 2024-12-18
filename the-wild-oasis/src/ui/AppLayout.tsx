import { Outlet } from 'react-router-dom'
import { Header, Main, Sidebar } from './'
import styled from 'styled-components'

const StyledAppLayout = styled.div`
  background-color: var(--color-grey-0);
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  )
}
export default AppLayout
