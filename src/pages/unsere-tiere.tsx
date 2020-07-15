import React from 'react'
import { SingleAlpaka } from 'components/alpaka'
import { css } from 'emotion'

export type Alpaka = {
  name: string
  nickname: string
  birthYear: number
  description: string
}

export default () => (
  <main className={layoutStyles.mainContainer}>
    <h1 className={layoutStyles.mainHeadline}>Unsere Tiere</h1>
    <p className={layoutStyles.pageDescription}>
      Unsere Herde besteht aus drei Stuten und drei Wallachen. Jedes der Tiere
      hat einen einzigartigen Charakter. Wir möchten sie Euch vorstellen:
    </p>
    {alpakas.map((alpaka) => (
      <SingleAlpaka {...alpaka} />
    ))}
  </main>
)

export const layoutStyles = {
  appStyles: css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `,
  contentStyles: css`
    flex-grow: 1;
  `,
  mainContainer: css`
    padding: 30px;
  `,
  secondaryHeadline: css`
    font-size: 20px;
  `,
  mainHeadline: css`
    font-size: 24px;
    font-weight: 600;
  `,
  pageDescription: css`
    margin-top: 20px;
    line-height: 1.4;
  `,
}

const alpakas: Alpaka[] = [
  {
    name: 'Gundula',
    nickname: 'Die Gelassene',
    birthYear: 2017,
    description:
      'Gundi ist die unangefochtene Chefin der Herde. Eine Wanderung ohne sie ist unmöglich, die Tiere gehen keinen Schritt ohne Gundula. Sie hat beschlossen, das Schlusslicht zu sein, weil man da so schön trödeln kann.',
  },
  {
    name: 'Rosi',
    nickname: 'Die Sensible',
    birthYear: 2017,
    description:
      'Für unsere schwarze Schönheit ist die Welt in Ordnung, wenn alle zusammen unterwegs sind und kein „gefährlicher Gegenverkehr“ in Sicht ist. Sie ist die Aufpasserin und immer darauf bedacht, dass alle beisammen sind.',
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
