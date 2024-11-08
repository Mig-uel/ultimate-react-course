import Pizza from './pizza.component'
import { pizzaData } from '../data'

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {pizzaData.length ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza {...pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>NO PIZZAS AVAILABLE AT THE MOMENT...</p>
      )}
    </main>
  )
}
export default Menu
