import { useLoaderData } from 'react-router-dom'

function Menu() {
  const data = useLoaderData()

  console.log(data)
  
  return <h1>Menu</h1>
}

export default Menu
