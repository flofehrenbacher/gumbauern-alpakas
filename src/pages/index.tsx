import React from 'react'
import { Link } from '@reach/router'
import { css } from 'emotion'
import { ResponsiveImage } from 'components/responsive-image'
import { Contact } from 'components/contact'

export default () => (
  <main>
    <div className={styles.imageContainer}>
      <h1 className={styles.headline}>
        Herzlich Willkommen bei den Gumbauern-Alpakas im idyllischen
        Kleinberghausen
      </h1>
      <ResponsiveImage
        className={styles.image}
        lazy={false}
        src="/img/homepage-hero/800x474.jpg"
      />
    </div>
    <div className={styles.linkContainer}>
      <Link className={styles.link} to="/unsere-tiere">
        Unsere Tiere
      </Link>
      <Link className={styles.link} to="/alpakawanderung">
        Alpaka&shy;wanderung
      </Link>
      <Link className={styles.link} to="/ueber-alpakas">
        Über Alpakas
      </Link>
    </div>
    <Contact className={styles.contactLayout} as="h2" />
  </main>
)

const styles = {
  link: css`
    font-size: 16px;
    border: 1px solid black;
    border-radius: 50%;
    height: 85px;
    width: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: black;
  `,
  image: css`
    max-width: 100vw;
  `,
  imageContainer: css`
    position: relative;
  `,
  headline: css`
    position: absolute;
    color: white;
    bottom: 50px;
    left: 30px;
    margin-right: 30px;
    font-size: 20px;
    font-weight: 600;
  `,
  linkContainer: css`
    display: flex;
    justify-content: space-between;
    margin: 30px;
  `,
  contactLayout: css`
    margin: 30px;
  `,
}
