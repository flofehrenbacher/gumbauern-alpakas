import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { PortableTextProps } from 'next-sanity'
import assert from 'node:assert'
import { SingleAlpaka } from '../../../components/alpaka'
import { H1, TextBlock } from '../../../components/shared'
import { sanityFetch } from '../../../sanity/lib/live'
import { OUR_ANIMALS_QUERY } from './query'

export type Alpaka = {
  name: string
  nickname: string
  birthYear: number
  description: PortableTextProps['value']
  images: SanityImageSource[]
  isLast?: boolean
  isFirst?: boolean
}

export default async function OurAnimals() {
  const { data } = await sanityFetch({
    query: OUR_ANIMALS_QUERY,
  })

  assert(data?._type === 'ourAnimals')

  const alpakas = data.alpakas ?? []

  return (
    <>
      <H1>{data.pageTitle}</H1>
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
          birthYear={alpaka.birthYear}
          description={alpaka.description}
          name={alpaka.name}
          images={alpaka.images}
          nickname={alpaka.nickname}
        />
      ))}
    </>
  )
}
