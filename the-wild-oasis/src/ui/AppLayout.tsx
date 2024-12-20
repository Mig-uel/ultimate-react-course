import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Header, Main, Sidebar } from './'

const StyledAppLayout = styled.div`
  background-color: var(--color-grey-0);
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  )
}
export default AppLayout
