import { css } from '@pigment-css/react'
import React from 'react'
import { CustomCarousel } from './custom-carousel'
import { ResponsiveImage } from './responsive-image'
import { marginLeftRight, SecondaryHeadline } from './shared'
import { Alpaka } from 'app/unsere-tiere/page'

export function SingleAlpaka({
  name,
  nickname,
  birthYear,
  description,
  isLast,
  isFirst,
}: Alpaka) {
  return (
    <div className={alpakaStyles.container}>
      <SecondaryHeadline>{name}</SecondaryHeadline>
      <CustomCarousel>
        <ResponsiveImage
          baseSrc={`/img/${name.toLowerCase()}/${name.toLowerCase()}_1`}
          alt={name}
          lazy={!isFirst}
        />
        <ResponsiveImage
          baseSrc={`/img/${name.toLowerCase()}/${name.toLowerCase()}_2`}
          alt={name}
          lazy
        />
        <ResponsiveImage
          baseSrc={`/img/${name.toLowerCase()}/${name.toLowerCase()}_3`}
          alt={name}
          lazy
        />
      </CustomCarousel>
      <dl className={alpakaStyles.aboutContainer}>
        <dd className={alpakaStyles.nickname}>{nickname}</dd>
        <dd className={alpakaStyles.birthYear}>*{birthYear}</dd>
        <dd className={alpakaStyles.description}>{description}</dd>
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
  }),
  trenner: css({
    width: '60%',
    marginTop: '50px',
    borderBottom: '1px solid #373a47',
    opacity: '0.5',
  }),
}
