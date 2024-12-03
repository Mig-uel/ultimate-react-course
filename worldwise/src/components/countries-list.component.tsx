import { CountryItem, Message, Spinner } from '../components'
import * as types from '../types'
import styles from '../styles/countries-list.module.css'

const CountriesList = ({
  cities,
  isLoading,
}: {
  cities: types.CityItem[]
  isLoading: boolean
}) => {
  if (isLoading) return <Spinner />

  if (!cities?.length)
    return (
      <Message message='Add your first country by clicking on a country on the map' />
    )

  const countriesMap = new Map()
  cities.forEach((city) => {
    countriesMap.set(city.country, city)
  })

  const countries = Array.from(countriesMap.values())

  return (
    <ul className={styles.countryList}>
      {countries?.map((country) => (
        <CountryItem {...country} key={country.id} />
      ))}
    </ul>
  )
}
export default CountriesList
