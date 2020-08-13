import { ResponsiveImage } from 'components/responsive-image'
import { H1, TextBlock } from 'components/shared'
import React from 'react'
import { css } from 'emotion'

export default () => (
  <>
    <H1>Über Alpakas</H1>
    <div
      className={css`
        margin-top: 30px;
      `}
    >
      <ResponsiveImage
        baseSrc={`/img/wolle/wolle`}
        alt={'Alpakawolle'}
        lazy={false}
      />
    </div>
    <TextBlock>
      <p>
        Alpakas stammen ursprünglich aus den Anden, wo sie von den Inkas schon
        vor tausenden Jahren wegen ihrer feinen Wolle domestiziert und gezüchtet
        wurden. Sie zählen zu den Paarhufern und sind sogenannte
        Neuweltkameliden, wobei ihre nächsten Verwandten die bekannten Lamas
        sind. Heute leben die meisten Alpakas immer noch in Peru, die
        Alpakazucht breitet sich aber auch auf anderen Kontinenten aus. Alpakas
        sind neugierige und sehr soziale Tiere. Deshalb können sie nicht alleine
        gehalten werden, sondern müssen in einer Herde leben. Wenn Ihr sie
        besser kennenlernen wollt, kommt doch einfach für eine Wanderung vorbei!
      </p>
    </TextBlock>
  </>
)
