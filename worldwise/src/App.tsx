import { BrowserRouter, Route, Routes } from 'react-router'
import { Home, PageNotFound, Pricing, Product } from './pages'
import Layout from './pages/layout.page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route index element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
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
