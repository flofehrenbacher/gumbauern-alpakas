import React from 'react'
import { Link } from '@reach/router'
import { css } from 'emotion'
import { ResponsiveImage } from 'components/responsive-image'

export default () => (
  <main>
    <h1>
      Herzlich Willkommen bei den Gumbauern-Alpakas im idyllischen
      Kleinberghausen
    </h1>
    <ResponsiveImage lazy={false} src="/img/homepage-hero/800x474.jpg" />
    <Link className={styles.link} to="/unsere-tiere">
      Unsere Tiere
    </Link>
    <Link className={styles.link} to="/alpakawanderung">
      Alpakawanderung
    </Link>
    <Link className={styles.link} to="/ueber-alpakas">
      Über Alpakas
    </Link>
  </main>
)

const styles = {
  link: css`
    font-size: 20px;
    border: 1px solid black;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    display: grid;
    place-items: center;
  `,
}
