import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useCitiesContext } from '../context/CitiesContext'
import styles from '../styles/map.module.css'

const Map = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { cities } = useCitiesContext()

  const [mapPosition] = useState<[number, number]>([40, 0])

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
export default Map
