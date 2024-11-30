import { BrowserRouter, Route, Routes } from 'react-router'
import { Home, PageNotFound, Pricing, Product } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='*' element={<PageNotFound />} />
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
