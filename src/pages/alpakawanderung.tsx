import React from 'react'
import { layoutStyles } from './unsere-tiere'
import { css, cx } from 'emotion'
import { ResponsiveImage } from 'components/responsive-image'
import { alpakaStyles } from 'components/alpaka'
import { CustomCarousel } from 'components/custom-carousel'

export default () => (
  <main className={layoutStyles.mainContainer}>
    <h1 className={layoutStyles.mainHeadline}>Alpakawanderung</h1>
    <p className={layoutStyles.pageDescription}>
      Nehmt Euch eine kleine Auszeit und habt ein Erlebnis der besonderen Art
      mit Euren flauschigen Begleitern.
    </p>
    <div className={alpakaStyles.ratioContainer}>
      <CustomCarousel>
        <ResponsiveImage
          className={alpakaStyles.img}
          lazy={false}
          src={`img/wandern/wandern_1.jpg`}
          alt={'Alpakas sind cool'}
        />
        <ResponsiveImage
          className={alpakaStyles.img}
          lazy={false}
          src={`img/wandern/wandern_2.jpg`}
          alt={'Alpakas sind cool'}
        />
        <ResponsiveImage
          className={alpakaStyles.img}
          lazy={false}
          src={`img/wandern/wandern_3.jpg`}
          alt={'Alpakas sind cool'}
        />
      </CustomCarousel>
    </div>
    <h2
      className={cx([
        layoutStyles.secondaryHeadline,
        internalStyles.secondaryHeadline,
      ])}
    >
      Ablauf der Wanderung
    </h2>
    <p className={layoutStyles.pageDescription}>
      Wir begrüßen Euch im Stall, wo Ihr erste Bekanntschaft mit den Alpakas
      schließt. Dazu gibt es Wissenswertes rund um ihre Herkunft und ihre
      Bedürfnisse. Anschließend werden die Tiere gehalftert und wir wandern im
      gemütlichen Alpaka-Tempo los. Unser Rundweg führt uns über Feldwege und je
      nach Witterung in den Wald. Bei einem Zwischenstopp können nach Belieben
      Fotos gemacht werden. Zurück im Stall, lassen wir die Wanderung noch
      gemütlich ausklingen und entlassen die Alpakas nach einer kleinen
      Belohnung auf die Weide.
    </p>
    <h2
      className={cx([
        layoutStyles.secondaryHeadline,
        internalStyles.secondaryHeadline,
      ])}
    >
      Dauer
    </h2>
    <ul className={internalStyles.list}>
      <li>Gesamtdauer: ca. 1,5 Std.</li>
      <li>
        Dauer der Wanderung: ca. 1 Stunde, je nach Lust und Laune der Alpakas
      </li>
    </ul>
    <h2
      className={cx([
        layoutStyles.secondaryHeadline,
        internalStyles.secondaryHeadline,
      ])}
    >
      Preise
    </h2>
    <ul className={internalStyles.list}>
      <li>pro AlpakaführerIn 18€</li>
      <li>pro Begleitperson 8€</li>
      <li>Kinder bis sechs Jahre sind frei</li>
      <li>Kinder ab 12 Jahren dürfen alleine ein Tier führen</li>
      <li>
        Alpakas sind Herdentiere, deshalb sollte eine Wanderung mit mindestens
        zwei Tieren gebucht werden
      </li>
      <li>
        Gerne könnt Ihr auch einen Geschenkgutschein erwerben
      </li>
    </ul>
    <h2
      className={cx([
        layoutStyles.secondaryHeadline,
        internalStyles.secondaryHeadline,
      ])}
    >
      Zu beachten
    </h2>
    <ul className={internalStyles.list}>
      <li>
        Bitte denkt an wetterfeste Kleidung und Schuhe (keine Regenschirme)
      </li>
      <li>
        Zum Wohl der Tiere behalten wir uns vor, den Termin bei Starkregen,
        Gewitter, Sturm zu verschieben
      </li>
      <li> 
        Bei Temperaturen ab 26° finden die Wanderungen in den Morgen- oder Abendstunden statt
      </li>
      <li>Hunde dürfen uns leider nicht begleiten</li>
      <li>Eltern haften auf dem gesamten Hof und während der Wanderung für ihre Kinder</li>
    </ul>
  </main>
)

const internalStyles = {
  secondaryHeadline: css`
    margin-top: 20px;
    margin-bottom: 20px;
  `,
  list: css`
    list-style: circle;
    li {
      line-height: 1.4;
    }
  `,
}
