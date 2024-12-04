import { Link } from 'react-router'
import { useCitiesContext } from '../context/CitiesContext'
import * as types from '../types'
import styles from '../styles/city-item.module.css'

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date))

const City = ({ cityName, date, emoji, id, position }: types.CityItem) => {
  const { currentCity } = useCitiesContext()

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${
          currentCity && currentCity.id === id ? styles['cityItem--active'] : ''
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date || '')})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )
}
export default City
