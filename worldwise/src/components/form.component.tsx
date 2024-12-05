import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import DatePicker from 'react-datepicker'
import { BackButton, Button, Message, Spinner } from '../components'
import { useURLPosition } from '../hooks/useURLPosition'
import { convertToEmoji } from '../utils/convertToEmoji'
import styles from '../styles/form.module.css'
import 'react-datepicker/dist/react-datepicker.css'
import { useCitiesContext } from '../context/CitiesContext'

const BASE_URL = 'https://geocode.maps.co/reverse'

const Form = () => {
  const navigate = useNavigate()
  const { addCity, isLoading: isLoadingAddCity } = useCitiesContext()
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
        setDate(new Date())
        setIsLoadingGeoCoding(true)

        const res = await fetch(
          `${BASE_URL}?lat=${lat}&lon=${lng}&api_key=6750a4d79812d191058921pnr95dcdd`
        )

        if (!res.ok) throw new Error('Please try again after 1 second.')

        const data = await res.json()

        if (data.error)
          throw new Error("That doesn't seem to be a city. Try again.")

        setCityName(
          data.address.city ||
            data.address.county ||
            data.address.town ||
            data.address.suburb ||
            ''
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!cityName || !date) return

    const city = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    }

    await addCity(city)

    navigate('/app')
  }

  return (
    <form
      className={`${styles.form} ${isLoadingAddCity ? styles.loading : ''} `}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor='cityName'>City name</label>
        <input
          id='cityName'
          onChange={(e) => setCityName(e.target.value)}
          value={cityName || country}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor='date'>When did you go to {cityName}?</label>
        <DatePicker
          id='date'
          onChange={(date) => setDate(date!)}
          selected={date}
          dateFormat='MM/dd/yyyy'
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
        <Button buttonType='submit' type='primary'>
          Add
        </Button>

        <BackButton />
      </div>
    </form>
  )
}
export default Form
