import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { CitiesList, City, CountriesList, Form } from './components'
import { Home, Login, PageNotFound, Pricing, Product } from './pages'
import MainLayout from './pages/main-layout.page'
import AppLayout from './pages/app-layout.component'
import type { CityItem } from './types'

const BASE_URL = 'http://localhost:3001/'

function App() {
  const [cities, setCities] = useState<CityItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true)

        const res = await fetch(BASE_URL + 'cities')

        const data = await res.json()

        setCities(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCities()
  }, [])

  return (
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
          <Route
            index
            element={<CitiesList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path='cities'
            element={<CitiesList cities={cities} isLoading={isLoading} />}
          />

          <Route path='cities/:id' element={<City />} />
          <Route
            path='countries'
            element={<CountriesList cities={cities} isLoading={isLoading} />}
          />
          <Route path='form' element={<Form />} />
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
