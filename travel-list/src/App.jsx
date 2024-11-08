import { useState } from 'react'
import Form from './components/form.component'
import Logo from './components/logo.component'
import PackingList from './components/packing-list.component'
import Stats from './components/stats.component'

function App() {
  const [items, setItems] = useState([
    { id: 1, description: 'Passports', qty: 2, packed: false },
    { id: 2, description: 'Socks', qty: 12, packed: false },
    { id: 3, description: 'Charger', qty: 1, packed: true },
  ])

  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList items={items} />
      <Stats />
    </div>
  )
}

export default App
