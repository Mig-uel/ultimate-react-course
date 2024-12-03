import * as types from '../types'
import styles from '../styles/city-item.module.css'

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date))

const City = ({ cityName, date, emoji }: types.CityItem) => {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date || '')})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  )
}
export default City
