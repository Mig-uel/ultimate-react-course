import { CityItem, Message, Spinner } from '../components'
import * as types from '../types'
import styles from '../styles/cities-list.module.css'

const CitiesList = ({
  cities,
  isLoading,
}: {
  cities: types.CityItem[] | null
  isLoading: boolean
}) => {
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
