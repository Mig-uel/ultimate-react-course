import { useCitiesContext } from '../context/CitiesContext'
import { CountryItem, Message, Spinner } from '../components'
import styles from '../styles/countries-list.module.css'

const CountriesList = () => {
  const { cities, isLoading } = useCitiesContext()

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
