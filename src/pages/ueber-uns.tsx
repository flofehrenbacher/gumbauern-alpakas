import { ResponsiveImage } from 'components/responsive-image'
import { H1, TextBlock } from 'components/shared'
import React from 'react'
import { css } from '@emotion/react'

export default function AboutUs() {
  return (
    <>
      <H1>Über uns</H1>
      <div
        css={css`
          margin-top: 30px;
        `}
      >
        <ResponsiveImage
          baseSrc={`/img/uns/uns`}
          alt={'Über uns'}
          lazy={false}
        />
      </div>
      <TextBlock>
        <p>Wir (Andreas, Ingrid, Kilian, Sophie, Lukas und Johannes) haben im Jahr 2018 beschlossen, den Gumbauern-Hof neu zu beleben.</p>
        <p>Aus einer „Schnapsidee“ wurde ernst und nach eingehender Recherche, Besuchen bei Züchtern und zahlreichen Seminaren sind die ersten fünf Alpakas bei uns eingezogen.</p>
        <p>Obwohl wir in der Landwirtschaft groß geworden sind, haben uns die Tiere von Anfang an immer wieder überrascht und herausgefordert. Nach einiger Zeit waren wir aber ein eingespieltes Team und in ersten gemeinsamen Erkundungstouren konnten wir bald unser Dorf und die Umgebung unsicher machen. </p>
        <p>Die Spaziergänge mit den Alpakas bereiten uns viel Freude, wobei natürlich das Wohlbefinden der Tiere im Vordergrund steht. Gundula & Co. Sind ein nicht mehr wegzudenkender Bestandteil unserer Familie geworden und wir können und möchten uns ein Leben ohne sie nicht mehr vorstellen.</p> 
        
        <p>
        Folgende Seminare und Kurse haben wir besucht: <br/>
        -	Alpaka-Einsteigerkurs bei den Lindforst-Alpakas <br/>
        -	AELAS, Kurs A <br/>
        -	Alpakaseminar für Einsteiger und Tiermedizin bei den Tölzer Land Alpakas <br/>
        -	Camelidynamics mit Sibylle Klasing-Mann bei den Saar-Alpakas <br/>
        -	Coach für lama-/alpakagestützte Aktivitäten auf der Orenda-Ranch <br/>
        -	Alpaka Sachkundenachweis nach § 11 Abs. 2 Nr. 1 TierSchG bei den Alpakas vom Silberberg <br/>
        Selbstverständlich wurde unsere Alpakahaltung vom zuständigen Veterinäramt abgenommen. <br/>
        </p> 
        
      </TextBlock>
    </>
  )
}