import { ReactElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { BackButton, Button, Message, Spinner } from '../components'
import { useURLPosition } from '../hooks/useURLPosition'
import styles from '../styles/form.module.css'
import { convertToEmoji } from '../utils/convertToEmoji'

const BASE_URL = 'https://geocode.maps.co/reverse'

const Form = () => {
  const navigate = useNavigate()
  const [lat, lng] = useURLPosition()
  const [cityName, setCityName] = useState('')
  const [country, setCountry] = useState('')
  const [date, setDate] = useState(new Date())
  const [notes, setNotes] = useState('')
  const [emoji, setEmoji] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoadingGeocoding, setIsLoadingGeoCoding] = useState(false)

  useEffect(() => {
    if (!lat || !lng) navigate('/app')

    const fetchCityData = async () => {
      try {
        setError(null)
        setIsLoadingGeoCoding(true)

        const res = await fetch(
          `${BASE_URL}?lat=${lat}&lon=${lng}&api_key=6750a4d79812d191058921pnr95dcdd`
        )

        if (!res.ok) throw new Error('Please try again after 1 second.')

        const data = await res.json()

        if (data.error)
          throw new Error("That doesn't seem to be a city. Try again.")

        setCityName(
          data.address.city || data.address.county || data.address.suburb || ''
        )
        setCountry(data.address.country)
        setEmoji(convertToEmoji(data.address.country_code))
      } catch (error) {
        if (error instanceof Error) setError(error.message)
      } finally {
        setIsLoadingGeoCoding(false)
      }
    }

    fetchCityData()
  }, [lat, lng, navigate])

  if (isLoadingGeocoding) return <Spinner />
  if (error) return <Message message={error} />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor='cityName'>City name</label>
        <input
          id='cityName'
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor='date'>When did you go to {cityName}?</label>
        <input
          id='date'
          onChange={(e) => setDate(new Date(e.target.value))}
          value={date.toLocaleDateString()}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor='notes'>Notes about your trip to {cityName}</label>
        <textarea
          id='notes'
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button onClick={() => navigate('')} type='primary'>
          Add
        </Button>

        <BackButton />
      </div>
    </form>
  )
}
export default Form
