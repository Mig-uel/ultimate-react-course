import './App.css'
import Footer from './components/footer.component'
import Header from './components/header.component'
import Menu from './components/menu.component'

function App() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22

  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <div>
      <Header />

      <Menu />

      <Footer />
    </div>
  )
}

export default App
