import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useCitiesContext } from '../context/CitiesContext'
import styles from '../styles/map.module.css'

const Map = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { cities } = useCitiesContext()

  const [mapPosition, setMapPosition] = useState<[number, number]>([40, 0])

  const lat = searchParams.get('lat')!
  const lng = searchParams.get('lng')!

  useEffect(() => {
    if (lat && lng) setMapPosition([Number(lat), Number(lng)])
  }, [lat, lng])

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
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  )
}

function ChangeCenter({ position }: { position: [lat: number, lng: number] }) {
  const map = useMap()

  map.setView(position, 6)

  return null
}

export default Map
