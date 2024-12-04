import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet'
import { useCitiesContext } from '../context/CitiesContext'
import { useGeolocation } from '../hooks/useGeoLocation'
import styles from '../styles/map.module.css'
import { Button, Spinner } from './'

const Map = () => {
  const [searchParams] = useSearchParams()
  const { cities } = useCitiesContext()
  const [mapPosition, setMapPosition] = useState<[number, number]>([40, 0])
  const {
    getPosition,
    isLoading: isLoadingPosition,
    position: geolocation,
  } = useGeolocation()

  const lat = searchParams.get('lat')!
  const lng = searchParams.get('lng')!

  useEffect(() => {
    if (lat && lng) setMapPosition([Number(lat), Number(lng)])
  }, [lat, lng])

  useEffect(() => {
    if (geolocation) setMapPosition([geolocation.lat, geolocation.lng])
  }, [geolocation])

  return (
    <div className={styles.mapContainer}>
      {!geolocation && (
        <Button type='position' onClick={getPosition}>
          {isLoadingPosition ? 'Locating...' : 'Locate Me'}
        </Button>
      )}
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
        <DetectMapClick />
      </MapContainer>
    </div>
  )
}

function ChangeCenter({ position }: { position: [lat: number, lng: number] }) {
  const map = useMap()

  map.setView(position, 6)

  return null
}

function DetectMapClick() {
  const navigate = useNavigate()

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  })

  return null
}

export default Map
