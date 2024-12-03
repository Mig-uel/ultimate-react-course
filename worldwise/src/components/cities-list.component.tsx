import { City, Spinner } from '../components'
import type { CityItem } from '../types'
import styles from '../styles/cities-list.module.css'

const CitiesList = ({
  cities,
  isLoading,
}: {
  cities: CityItem[] | null
  isLoading: boolean
}) => {
  if (isLoading) return <Spinner />

  return (
    <ul className={styles.cityList}>
      {cities?.map((city) => (
        <City {...city} key={city.id} />
      ))}
    </ul>
  )
}
export default CitiesList
