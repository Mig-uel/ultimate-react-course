import Pizza from './pizza.component'
import { pizzaData } from '../data'

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza {...pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  )
}
export default Menu
