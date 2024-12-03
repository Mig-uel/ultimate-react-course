import styles from '../styles/country-item.module.css'
import type { CityItem } from '../types'

const CountryItem = ({ emoji, country }: CityItem) => {
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{country}</span>
    </li>
  )
}
export default CountryItem
