import { useParams, useSearchParams } from 'react-router'
// import styles from '../styles/city.module.css'

// const formatDate = (date: string) =>
//   new Intl.DateTimeFormat('en', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//     weekday: 'long',
//   }).format(new Date(date))

const City = () => {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const lat = searchParams.get('lat')!
  const lng = searchParams.get('lng')!

  return (
    <div>
      <h1>City: {id}</h1>
      <p>{lat}</p>
      <p>{lng}</p>
    </div>
  )
  // return (
  //   <div className={styles.city}>
  //     <div className={styles.row}>
  //       <h6>City name</h6>
  //       <h3>
  //         <span>{emoji}</span> {cityName}
  //       </h3>
  //     </div>

  //     <div className={styles.row}>
  //       <h6>You went to {cityName} on</h6>
  //       <p>{formatDate(date || '')}</p>
  //     </div>

  //     {notes && (
  //       <div className={styles.row}>
  //         <h6>Your notes</h6>
  //         <p>{notes}</p>
  //       </div>
  //     )}

  //     <div className={styles.row}>
  //       <h6>Learn more</h6>
  //       <a
  //         href={`https://en.wikipedia.org/wiki/${cityName}`}
  //         target='_blank'
  //         rel='noreferrer'
  //       >
  //         Check out {cityName} on Wikipedia &rarr;
  //       </a>
  //     </div>
  //   </div>
  // )
}
export default City