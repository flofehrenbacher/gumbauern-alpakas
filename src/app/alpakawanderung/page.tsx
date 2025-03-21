import { CustomCarousel } from 'components/custom-carousel'
import { ResponsiveImage } from 'components/responsive-image'
import { H1, SecondaryHeadline, TextBlock } from 'components/shared'
import { css } from '@pigment-css/react'
import React from 'react'

export default function Alpakawanderung() {
  return (
    <>
      <H1>Alpakawanderung</H1>
      <TextBlock>
        <p>
          Nehmt Euch eine kleine Auszeit und habt ein Erlebnis der besonderen
          Art mit Euren flauschigen Begleitern.
        </p>
      </TextBlock>
      <CustomCarousel>
        <ResponsiveImage
          lazy={false}
          baseSrc={`/img/wandern/wandern_1`}
          alt={'Alpakawanderung in Kleinberghausen'}
        />
        <ResponsiveImage
          baseSrc={`/img/wandern/wandern_2`}
          alt={'Alpakawanderung in Freystadt'}
        />
        <ResponsiveImage
          baseSrc={`/img/wandern/wandern_3`}
          alt={'Alpakawanderung in Neumarkt'}
        />
      </CustomCarousel>
      <TextBlock>
        <SecondaryHeadline>Ablauf der Wanderung</SecondaryHeadline>
        <p className={internalStyles.textBelowHeadline}>
          Wir begrüßen Euch im Stall, wo Ihr erste Bekanntschaft mit den Alpakas
          schließt. Dazu gibt es Wissenswertes rund um ihre Herkunft und ihre
          Bedürfnisse. Anschließend werden die Tiere gehalftert und wir wandern
          im gemütlichen Alpaka-Tempo los. Unser Rundweg führt uns über Feldwege
          und je nach Witterung in den Wald. Bei einem Zwischenstopp können nach
          Belieben Fotos gemacht werden. Zurück im Stall, lassen wir die
          Wanderung noch gemütlich ausklingen und entlassen die Alpakas nach
          einer kleinen Belohnung auf die Weide.
        </p>
        <SecondaryHeadline>Dauer & Termine</SecondaryHeadline>
        <ul
          className={`${internalStyles.list} ${internalStyles.textBelowHeadline}`}
        >
          <li>Gesamtdauer: ca. 1,5 Std.</li>
          <li>
            Dauer der Wanderung: ca. 1 Stunde, je nach Lust und Laune der
            Alpakas
          </li>
          <li>
            Termine: Samstag/Sonntag 14 Uhr (Anmeldung erforderlich), für
            separate Gruppen (mindestens 6 Tiere) nach Absprache auch an anderen
            Tagen
          </li>
          <li>
            Um unseren Tieren den Spaß an den Spaziergängen zu erhalten, wandern
            wir nur zwei- bis dreimal pro Woche
          </li>
        </ul>
        <SecondaryHeadline>Preise</SecondaryHeadline>
        <ul
          className={`${internalStyles.list} ${internalStyles.textBelowHeadline}`}
        >
          <li>pro AlpakaführerIn 23€</li>
          <li>pro Begleitperson ohne Alpaka 10€</li>
          <li>Kinder bis 11 Jahre sind frei</li>
          <li>Kinder ab 12 Jahren dürfen alleine ein Tier führen</li>
          <li>Gerne könnt Ihr auch einen Geschenkgutschein erwerben</li>
          <li>Kleinere Gruppen werden zusammengelegt</li>
          <li>Separate Wanderungen ab einer Buchung von sechs Alpakas</li>
        </ul>
        <SecondaryHeadline>Zu beachten</SecondaryHeadline>
        <ul
          className={`${internalStyles.list} ${internalStyles.textBelowHeadline}`}
        >
          <li>
            Bitte denkt an wetterfeste Kleidung und Schuhe (keine Regenschirme)
          </li>
          <li>
            Zum Wohl der Tiere behalten wir uns vor, den Termin bei Regen,
            Gewitter, Sturm zu verschieben
          </li>
          <li>
            Bei Temperaturen ab 26° finden die Wanderungen in den Morgen- oder
            Abendstunden statt
          </li>
          <li>Hunde dürfen uns leider nicht begleiten</li>
          <li>
            Eltern haften auf dem gesamten Hof und während der Wanderung für
            ihre Kinder
          </li>
        </ul>
      </TextBlock>
    </>
  )
}

const internalStyles = {
  secondaryHeadline: css({
    marginTop: '20px',
    marginBottom: '20px',
  }),
  list: css({
    listStyle: 'circle',
    li: {
      lineHeight: '1.4',
    },
  }),
  textBelowHeadline: css({
    marginTop: '10px',
  }),
}
