import { css } from 'emotion'
import { Icon, LatLngTuple } from 'leaflet'
import React, { HTMLAttributes } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { layoutStyles } from '../pages/unsere-tiere'

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
        <h1 className={layoutStyles.mainHeadline}>Kontakt</h1>
      )}
      <address className={styles.addressLine}>Gumbauern-Alpakas</address>
      <address className={styles.addressLine}>
        Kleinberghausen 5  <br />  92342 Freystadt
      </address>
      <span className={styles.addressLine}>
        Tel.
        <a className={styles.phone} href="tel:+49015754205232">
          01575-4205232 (WhatsApp)
        </a>
      </span>
      <a className={styles.addressLine} href="mailto:gumbauern-alpakas@posteo.de">
        gumbauern-alpakas@posteo.de
      </a>
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
    margin-top: 20px;
    display: flex;
  `,
  phone: css`
    margin-left: 10px;
  `,
  map: css`
    height: 300px;
    width: 400px;
    max-width: 100%;
    margin: 20px 0;
  `,
}
