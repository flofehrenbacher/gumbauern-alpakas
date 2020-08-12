import { css } from 'emotion'
import { Icon, LatLngTuple } from 'leaflet'
import React, { HTMLAttributes } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { layoutStyles } from '../pages/unsere-tiere'
import { H1 } from './shared'

const marker = new Icon({
  iconUrl: '/img/location-marker.svg',
  iconSize: [50, 50],
})

export function Contact(
  props: HTMLAttributes<HTMLDivElement> & { as: 'h1' | 'h2' }
) {
  const position: LatLngTuple = [49.15636, 11.3629]

  const { as, ...rest } = props
  return (
    <div {...rest}>
      {as === 'h2' ? (
        <h2 className={layoutStyles.secondaryHeadline}>Kontakt</h2>
      ) : (
        <H1>Kontakt</H1>
      )}
      <div className={styles.addressContainer}>
        <address className={styles.addressLine}>Gumbauern-Alpakas</address>
        <address className={styles.addressLine}>Familie Olbrich</address>
        <address className={styles.addressLine}>Kleinberghausen 5</address>
        <address className={styles.addressLine}>92342 Freystadt</address>
        <span className={styles.addressLine}>
          Tel.:
          <a className={styles.phone} href="tel:084622638">
            08462-2638
          </a>
        </span>
        <span className={styles.addressLine}>
          E-Mail:
          <a className={styles.phone} href="mailto:gumbauern-alpakas@posteo.de">
            gumbauern-alpakas@posteo.de
          </a>
        </span>
      </div>
      <Map center={position} zoom={13} className={styles.map}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={marker}>
          <Popup>
            <a href="https://goo.gl/maps/xT88p5ppbEHf4EwYA">
              Anfahrt über Google Maps
            </a>
          </Popup>
        </Marker>
      </Map>
    </div>
  )
}

const styles = {
  addressLine: css`
    margin-top: 7px;
    display: flex;
  `,
  phone: css`
    margin-left: 10px;
  `,
  map: css`
    height: 300px;
    margin: 20px auto;
  `,
  addressContainer: css`
    margin-top: 30px;
  `,
}
