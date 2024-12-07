import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import { CitiesList, City, CountriesList, Form } from './components'

import { Home, Login, PageNotFound, Pricing, Product } from './pages'
import MainLayout from './pages/main-layout.page'
import AppLayout from './pages/app-layout.component'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='product' element={<Product />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>

          {/* APP ROUTES */}
          <Route element={<AppLayout />} path='/app'>
            <Route index element={<Navigate to='cities' replace />} />
            <Route path='cities' element={<CitiesList />} />

            <Route path='cities/:id' element={<City />} />
            <Route path='countries' element={<CountriesList />} />
            <Route path='form' element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

/* 
  Single Page Application (SPA) are executed entirely on the client (browsers)
  Routes: different URLs correspond to different views (components)
  JavaScript is used to update the page (DOM)
  The page is never reloaded
*/
