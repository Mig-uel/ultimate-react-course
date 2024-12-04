import { CityItem, Message, Spinner } from '../components'
import { useCitiesContext } from '../context/CitiesContext'
import styles from '../styles/cities-list.module.css'

const CitiesList = () => {
  const { cities, isLoading } = useCitiesContext()

  if (isLoading) return <Spinner />

  if (!cities?.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    )

  return (
    <ul className={styles.cityList}>
      {cities?.map((city) => (
        <CityItem {...city} key={city.id} />
      ))}
    </ul>
  )
}
export default CitiesList
