import Pizza from './pizza.component'

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozzarella, spinach, and ricotta cheese'
        photo='https://images.unsplash.com/photo-1617343251257-b5d709934ddd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        price='10'
      />

      <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozzarella, spinach, and ricotta cheese'
        photo='https://images.unsplash.com/photo-1617343251257-b5d709934ddd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        price='10'
      />
    </main>
  )
}
export default Menu
