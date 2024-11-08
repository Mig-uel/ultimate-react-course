import Pizza from './pizza.component'
import { pizzaData } from '../data'

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {pizzaData.length ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza {...pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>NO PIZZAS AVAILABLE AT THE MOMENT...</p>
      )}
    </main>
  )
}
export default Menu
