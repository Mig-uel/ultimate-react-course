import { Link } from 'react-router'
import { Nav } from '../components'

import styles from '../styles/home.module.css'

const Home = () => {
  return (
    <main className={styles.homepage}>
      <Nav />

      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

        <Link to='/login' className='cta'>
          Start Tracking Now
        </Link>
      </section>
    </main>
  )
}
export default Home
