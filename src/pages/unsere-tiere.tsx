import React from 'react'
import { SingleAlpaka } from 'components/alpaka'
import { css } from '@emotion/react'
import { H1, TextBlock } from 'components/shared'

export type Alpaka = {
  name: string
  nickname: string
  birthYear: number
  description: string
  isLast?: boolean
  isFirst?: boolean
}

export default function OurAnimals() {
  return (
    <>
      <H1>Unsere Tiere</H1>
      <TextBlock>
        <p>
          Unsere Herde besteht aus vier Stuten und fünf Wallachen. Jedes der
          Tiere hat einen einzigartigen Charakter. Wir möchten sie Euch
          vorstellen:
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
}

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
    name: 'Alfons',
    nickname: 'Der Teddybär',
    birthYear: 2018,
    description:
      'Unser süßer Alfons ist ein Alpaka zum Verlieben. Seinen schönen Augen kann keiner widerstehen. Wenn man dem Charmeur besonders viel Aufmerksamkeit schenkt, bedankt er sich mit Küsschen auf die Nase.',
  },
  {
    name: 'Berti',
    nickname: 'Der Tollpatsch',
    birthYear: 2018,
    description:
      'Unser lieber Berti ist manchmal sehr verpeilt. Es kann schon mal passieren, dass er in die entgegengesetzte Richtung der anderen Tiere läuft, oder den Weideneingang nicht findet. Sein verwirrter Blick bringt uns einfach immer zum Lachen.',
  },
  {
    name: 'Franzl',
    nickname: 'Der Genießer',
    birthYear: 2020,
    description:
      'Unser süßer „Kleiner“ marschiert bis ans Ende der Welt, solange er nur einen Schritt hinter seinem Freund Ferdl laufen kann. Der ist allerdings abgeschrieben, sobald Franz einen Leckerbissen am Wegesrand entdeckt, da vergisst er einfach alles um sich herum.',
  },
  {
    name: 'Ferdl',
    nickname: 'Der Unerschrockene',
    birthYear: 2020,
    description:
      'Unser Ferdl ist sehr mutig und wagt es sogar, sich „Onkel Karl“ entgegenzustellen. Ferdl hat immer seinen Freund Franz im Schlepptau, der ihm aber manchmal ganz schön auf die Nerven geht. ',
  },
  {
    name: 'Gitti',
    nickname: 'Die Sanftmütige',
    birthYear: 2021,
    description:
      'Gitti ist ein wahrer Schatz und bei den Wanderungen eine treue und zuverlässige Begleiterin. Sie versteht sich mit allen Tieren der Herde und wer ihr in die schönen Augen sieht, um den ist es geschehen. ',
  },
  {
    name: 'Gustl',
    nickname: 'Der Mutige',
    birthYear: 2022,
    description:
      'Obwohl Gustl noch sehr jung ist, hegt er schon Ambitionen auf den Chefsessel. Die Zurechtweisungen der "Alten" sind ihm völlig egal, er macht einfach - immer gut gelaunt - was er will und ist unser Herzbub.',
  },
  {
    name: 'Annelies',
    nickname: 'Die Freche',
    birthYear: 2022,
    description:
      'Süß, süßer, Annelies ... doch der Schein trügt, die kleine Dame kann auch anders. Unsere Jüngste ist auch unser temperamentvollstes Alpaka. Bei kleinsten Pflegemaßnahmen und am Futtertrog stellt sie ihren Charakter eindrucksvoll zur Schau.  ',
  },
  {
    name: 'Uschi',
    nickname: 'Die Stolze',
    birthYear: 2011,
    description:
      'Uschi, Grande Dame der Herde, zeigt den „jungen Wilden“ wo es lang geht. Sie führt die Wanderungen an und kann es absolut nicht leiden, von ihrem Gefolge überholt zu werden. <br> Unsere liebe Uschi ist am 31.01.2023 im Stall bei ihrer Herde für immer eingeschlafen. Wir vermissen sie sehr!',
  },
  {
    name: 'Karl',
    nickname: 'Der Macho',
    birthYear: 2018,
    description:
      'Karl muss immer der Erste sein, wenn es ums Fressen geht. Er macht gerne auf „dicke Hose“, aber wenn es ernst wird, versteckt er sich dann doch lieber hinter den Mädels. <br> Unser Raufbold ist am 27.03.2023 umgezogen. Wir waren schon lange auf der Suche nach einer großen Herde, wo sich unserem Quertreiber auch mal jemand entgegenstellt. Zum Glück konnten wir unseren Karl guten Gewissens auf den Winklhof bringen. Einen besseren Platz hätten wir uns nicht vorstellen können, auch wenn es uns sehr schwer gefallen ist. Er hat sich super eingelebt und zeigt auch mal Respekt vor den stattlichen Lamas in seiner neuen Herde.',
  },
]
