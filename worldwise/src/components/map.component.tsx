import { useNavigate, useSearchParams } from 'react-router'
import styles from '../styles/map.module.css'

const Map = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const lat = searchParams.get('lat')!
  const lng = searchParams.get('lng')!

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>

      <p>{lat}</p>
      <p>{lng}</p>
    </div>
  )
}
export default Map
