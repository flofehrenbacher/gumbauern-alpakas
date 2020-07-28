import React from 'react'
import { Link } from '@reach/router'
import { css } from 'emotion'
import { ResponsiveImage } from 'components/responsive-image'
import { Contact } from 'components/contact'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { CustomCarousel } from 'components/custom-carousel'

export default () => (
  <main>
    <div className={styles.imageContainer}>
      <h1 className={styles.headline}>
        Herzlich Willkommen bei den Gumbauern-Alpakas im idyllischen
        Kleinberghausen
      </h1>
      <CustomCarousel>
        <ResponsiveImage
          className={styles.image}
          lazy={false}
          src="/img/titel/titel_1.jpg"
        />
        <ResponsiveImage
          className={styles.image}
          lazy={false}
          src="/img/titel/titel_2.jpg"
        />
        <ResponsiveImage
          className={styles.image}
          lazy={false}
          src="/img/titel/titel_3.jpg"
        />
      </CustomCarousel>
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
    color: #394e59;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    padding: 15px;
    &:not(:last-child) {
      border-bottom: 2px solid #dfd3c3;
    }
    &:hover {
      background-color: #dfd3c3;
    }
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
    flex-direction: column;
    margin: 30px;
  `,
  contactLayout: css`
    margin: 30px;
  `,
}
