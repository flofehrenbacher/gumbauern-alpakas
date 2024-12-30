import { css } from '@pigment-css/react'
import React from 'react'
import { CustomCarousel } from './custom-carousel'
import { ResponsiveImage } from './responsive-image'
import { contentWidth, marginLeftRight, SecondaryHeadline } from './shared'
import { Alpaka } from '../app/(gumbauern-alpakas)/unsere-tiere/page'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../sanity/lib/image'

export function SingleAlpaka({
  name,
  nickname,
  birthYear,
  description,
  isLast,
  isFirst,
  images,
}: Alpaka) {
  const imageUrls = images
    .map((image) =>
      urlFor(image)
        ?.width(contentWidth * 2)
        .url()
    )
    .filter((url) => !!url) as string[]

  return (
    <div className={alpakaStyles.container}>
      <SecondaryHeadline>{name}</SecondaryHeadline>
      <CustomCarousel>
        {imageUrls.map((src, i) => (
          <ResponsiveImage
            key={src + i}
            src={src}
            alt={name}
            lazy={!(isFirst && i === 0)}
          />
        ))}
      </CustomCarousel>
      <dl className={alpakaStyles.aboutContainer}>
        <dd className={alpakaStyles.nickname}>{nickname}</dd>
        <dd className={alpakaStyles.birthYear}>*{birthYear}</dd>
        <dd className={alpakaStyles.description}>
          <PortableText value={description} />
        </dd>
      </dl>
      {isLast ? null : <div className={alpakaStyles.trenner} />}
    </div>
  )
}

export const alpakaStyles = {
  container: css({
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  aboutContainer: css({
    margin: `30px ${marginLeftRight}px 0`,
  }),
  nickname: css({
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '0',
  }),
  birthYear: css({
    textAlign: 'center',
    marginTop: '20px',
  }),
  description: css({
    marginTop: '20px',
    lineHeight: '1.4',
    strong: {
      fontWeight: 'bold',
    },
  }),
  trenner: css({
    width: '60%',
    marginTop: '50px',
    borderBottom: '1px solid #373a47',
    opacity: '0.5',
  }),
}
