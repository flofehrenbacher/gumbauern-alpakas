import React from 'react'
import { layoutStyles } from './unsere-tiere'

export default () => (
  <main className={layoutStyles.mainContainer}>
    <h1 className={layoutStyles.mainHeadline}>Über Alpakas</h1>
    <p className={layoutStyles.pageDescription}>
      Alpakas stammen ursprünglich aus den Anden, wo sie von den Inkas schon vor
      tausenden Jahren wegen ihrer feinen Wolle domestiziert und gezüchtet
      wurden. Sie zählen zu den Paarhufern und sind sogenannte Neuweltkameliden,
      wobei ihre nächsten Verwandten die bekannten Lamas sind. Heute leben die
      meisten Alpakas immer noch in Peru, die Alpakazucht breitet sich aber auch
      auf anderen Kontinenten aus. Alpakas sind neugierige und sehr
      soziale Tiere. Deshalb können sie nicht alleine gehalten werden, sondern
      müssen in einer Herde leben. Wenn Ihr mehr erfahren wollt, kommt doch einfach
      für eine Wanderung vorbei!
    </p>
  </main>
)
