import { ResponsiveImage } from '../../components/responsive-image'
import { H1, TextBlock } from '../../components/shared'
import React from 'react'
import { css } from '@pigment-css/react'

export default function AboutUs() {
  return (
    <>
      <H1>Über uns</H1>
      <div
        className={css({
          marginTop: '30px',
        })}
      >
        <ResponsiveImage
          baseSrc={`/img/ueber_uns/ueber_uns`}
          alt={'Über uns'}
          lazy={false}
        />
      </div>
      <TextBlock>
        <p>
          Wir (Andreas, Ingrid, Kilian, Sophie, Lukas und Johannes) haben im
          Jahr 2018 beschlossen, den Gumbauern-Hof neu zu beleben.
        </p>
        <p>
          Aus einer „Schnapsidee“ wurde ernst und nach eingehender Recherche,
          Besuchen bei Züchtern und zahlreichen Seminaren sind die ersten fünf
          Alpakas bei uns eingezogen.
        </p>
        <p>
          Obwohl wir in der Landwirtschaft groß geworden sind, haben uns die
          Tiere von Anfang an immer wieder überrascht und herausgefordert. Nach
          einiger Zeit waren wir aber ein eingespieltes Team.
        </p>
        <p>
          Gundula & Co. sind ein nicht mehr wegzudenkender Bestandteil unserer
          Familie geworden und wir können und möchten uns ein Leben ohne sie
          nicht mehr vorstellen.
        </p>
        <br />
        <p>Folgende Seminare und Kurse haben wir besucht:</p>
        <ul
          className={`${internalStyles.list} ${internalStyles.textBelowHeadline}`}
        >
          <li>Alpaka-Einsteigerkurs bei den Lindforst-Alpakas</li>
          <li>AELAS, Kurs A</li>
          <li>
            Alpakaseminar für Einsteiger und Tiermedizin bei den Tölzer Land
            Alpakas
          </li>
          <li>Camelidynamics mit Sibylle Klasing-Mann bei den Saar-Alpakas</li>
          <li>
            Coach für lama-/alpakagestützte Aktivitäten auf der Orenda-Ranch
          </li>
          <li>
            Ernährung/Krankheiten/Parasiten bei Kameliden bei Prof. Dr. Dr.
            Gauly, Eventhof Kisselmühle
          </li>
          <li>"Lama und Mensch" bei den Erlenwald Lamas</li>
          <li>
            Alpaka-Sachkundenachweis nach § 11 Abs. 2 Nr. 1 TierSchG bei den
            Alpakas vom Silberberg
          </li>
        </ul>
        <br />
        <p>
          Selbstverständlich wurde unsere Alpakahaltung vom zuständigen
          Veterinäramt abgenommen.
        </p>
      </TextBlock>
    </>
  )
}

const internalStyles = {
  list: css({
    listStyle: 'circle',
    li: {
      lineHeight: 1.4,
    },
  }),
  textBelowHeadline: css({
    marginTop: '10px',
  }),
}
