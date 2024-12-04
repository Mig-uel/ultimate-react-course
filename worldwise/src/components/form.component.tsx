import { useState } from 'react'
import { useNavigate } from 'react-router'
import { BackButton, Button } from '../components'
import styles from '../styles/form.module.css'

const Form = () => {
  const navigate = useNavigate()
  const [cityName, setCityName] = useState('')
  // const [country, setCountry] = useState('')
  const [date, setDate] = useState(new Date())
  const [notes, setNotes] = useState('')

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor='cityName'>City name</label>
        <input
          id='cityName'
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
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
