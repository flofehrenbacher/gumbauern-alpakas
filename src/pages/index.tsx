import React from 'react'
import { Link } from '@reach/router'
import { css, cx } from 'emotion'
import { ResponsiveImage } from 'components/responsive-image'
import { Contact } from 'components/contact'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { CustomCarousel } from 'components/custom-carousel'
import { alpakaStyles } from 'components/alpaka'

export default () => (
  <main className={styles.carouselContainer}>
    <h1 className={styles.headline}>
      Herzlich Willkommen bei den Gumbauern-Alpakas
    </h1>
    <div className={cx([alpakaStyles.ratioContainer])}>
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
    <div className={styles.contactLayout}>
      <Contact as="h2" />
    </div>
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
    color: #394e59;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin: 30px 30px 0;
  `,
  linkContainer: css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 30px 0;
    width: 250px;
  `,
  contactLayout: css`
    padding: 0 30px 30px;
    max-width: 100%;
  `,
  carouselContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
}
