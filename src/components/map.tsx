'use client'

import { Icon, LatLngTuple } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { ErrorBoundary } from 'react-error-boundary'
import styles from './map.module.css'

const position: LatLngTuple = [49.15636, 11.3629]

export default function Map() {
  return (
    <ErrorBoundary fallback={null}>
      <MapContainer center={position} zoom={13} className={styles.map}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          icon={
            new Icon({
              iconUrl: '/img/location-marker.svg',
              iconSize: [50, 50],
            })
          }
        >
          <Popup>
            <a href="https://goo.gl/maps/xT88p5ppbEHf4EwYA">
              Anfahrt über Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </ErrorBoundary>
  )
}
