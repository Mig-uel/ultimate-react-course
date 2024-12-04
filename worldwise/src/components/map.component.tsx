import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from '../styles/map.module.css'

const Map = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [mapPosition, setMapPosition] = useState<[number, number]>([40, 0])

  const lat = searchParams.get('lat')!
  const lng = searchParams.get('lng')!

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
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
export default Map
