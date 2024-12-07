import { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import { CitiesList, City, CountriesList, Form } from './components'

const AppLayout = lazy(() => import('./pages/app-layout.component'))
const MainLayout = lazy(() => import('./pages/main-layout.page'))
const Home = lazy(() => import('./pages/home.page'))
const Login = lazy(() => import('./pages/login.page'))
const Product = lazy(() => import('./pages/product.page'))
const Pricing = lazy(() => import('./pages/pricing.page'))
const PageNotFound = lazy(() => import('./pages/page-not-found'))

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
