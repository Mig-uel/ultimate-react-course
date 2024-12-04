import { useParams } from 'react-router'
import { useCitiesContext } from '../context/CitiesContext'
import { useEffect } from 'react'
import styles from '../styles/city.module.css'
import Spinner from './spinner.component'

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date))

const City = () => {
  const { id } = useParams()
  const { currentCity, getCity, isLoading } = useCitiesContext()

  useEffect(() => {
    getCity(id as string)
  }, [id])

  if (isLoading) return <Spinner />
  if (!currentCity) return <h1>Something went wrong...</h1>

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{currentCity?.emoji}</span> {currentCity?.cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {currentCity?.cityName} on</h6>
        <p>{formatDate(currentCity.date)}</p>
      </div>

      {currentCity?.notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{currentCity.notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${currentCity?.cityName}`}
          target='_blank'
          rel='noreferrer'
        >
          Check out {currentCity?.cityName} on Wikipedia &rarr;
        </a>
      </div>
    </div>
  )
}
export default City
