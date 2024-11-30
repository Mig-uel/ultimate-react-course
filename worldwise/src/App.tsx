import { BrowserRouter, Route, Routes } from 'react-router'
import { Home, Login, PageNotFound, Pricing, Product } from './pages'
import MainLayout from './pages/main-layout.page'
import AppLayout from './pages/app-layout.component'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path='/'>
          <Route index element={<Home />} />
          <Route element={<Login />} path='login' />
          <Route path='product' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>

        <Route element={<AppLayout />} path='/app' />
      </Routes>
    </BrowserRouter>
  )
}

export default App

/* 
  Single Page Application (SPA) are executed entirely on the client (browsers)
  Routes: different URLs correspond to different views (components)
  JavaScript is used to update the page (DOM)
  The page is never reloaded
*/
