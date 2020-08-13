import React from 'react'
import { SingleAlpaka } from 'components/alpaka'
import { css } from 'emotion'
import { H1, TextBlock } from 'components/shared'

export type Alpaka = {
  name: string
  nickname: string
  birthYear: number
  description: string
  isLast?: boolean
  isFirst?: boolean
}

export default () => (
  <>
    <H1>Unsere Tiere</H1>
    <TextBlock>
      <p>
        Unsere Herde besteht aus drei Stuten und drei Wallachen. Jedes der Tiere
        hat einen einzigartigen Charakter. Wir möchten sie Euch vorstellen:
      </p>
    </TextBlock>
    {alpakas.map((alpaka, i) => (
      <SingleAlpaka
        isLast={i === alpakas.length - 1}
        isFirst={i === 0}
        key={alpaka.name}
        {...alpaka}
      />
    ))}
  </>
)

export const layoutStyles = {
  contentStyles: css`
    flex-grow: 1;
  `,
  mainContainer: css`
    max-width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  secondaryHeadline: css`
    font-weight: 600;
    font-size: 20px;
  `,
  mainHeadline: css`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  `,
}

const alpakas: Alpaka[] = [
  {
    name: 'Gundula',
    nickname: 'Die Gelassene',
    birthYear: 2017,
    description:
      'Gundi ist die unangefochtene Chefin der Herde. Gleichzeitig ist sie auch unser neugierigstes Alpaka. Beim Wandern hat sie beschlossen das Schlusslicht zu sein, weil man da so schön trödeln kann.',
  },
  {
    name: 'Rosi',
    nickname: 'Die Sensible',
    birthYear: 2017,
    description:
      'Für unsere schwarze Schönheit ist die Welt in Ordnung, wenn alle zusammen unterwegs sind und kein „gefährlicher Gegenverkehr“ in Sicht ist. Sie ist die Aufpasserin und wartet bei den Wanderungen geduldig auf die Nachzügler.',
  },
  {
    name: 'Uschi',
    nickname: 'Die Stolze',
    birthYear: 2011,
    description:
      'Uschi, alter Hase und unser neuestes Herdenmitglied, zeigt den „jungen Wilden“ wo es lang geht. Sie führt die Wanderungen an und kann es absolut nicht leiden, von ihrem Gefolge überholt zu werden.',
  },
  {
    name: 'Alfons',
    nickname: 'Der Teddybär',
    birthYear: 2018,
    description:
      'Unser süßer Alfons ist ein Alpaka zum Verlieben. Seinen schönen Augen kann keiner widerstehen. Wenn man dem Charmeur besonders viel Aufmerksamkeit schenkt, bedankt er sich mit Küsschen auf die Nase.',
  },
  {
    name: 'Karl',
    nickname: 'Der Macho',
    birthYear: 2018,
    description:
      'Karl muss immer der Erste sein, wenn es ums Fressen geht. Er ist ein kleiner Raufbold und macht gerne auf „dicke Hose“, aber wenn es ernst wird, versteckt er sich dann doch lieber hinter den Mädels.',
  },
  {
    name: 'Berti',
    nickname: 'Der Tollpatsch',
    birthYear: 2018,
    description:
      'Unser lieber Berti ist manchmal sehr verpeilt. Es kann schon mal passieren, dass er in die entgegengesetzte Richtung der anderen Tiere läuft, oder den Weideneingang nicht findet. Sein verwirrter Blick bringt uns einfach immer zum Lachen.',
  },
]
