import VisuallyHidden from '@reach/visually-hidden'
import { css } from 'emotion'
import React from 'react'
import { Alpaka } from '../pages/unsere-tiere'
import { CustomCarousel } from './custom-carousel'
import { ResponsiveImage } from './responsive-image'
import { marginLeftRight, SecondaryHeadline } from './shared'

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
        />
        <ResponsiveImage
          baseSrc={`/img/${name.toLowerCase()}/${name.toLowerCase()}_3`}
          alt={name}
        />
      </CustomCarousel>
      <dl className={alpakaStyles.aboutContainer}>
        <dt>
          <VisuallyHidden>Spitzname</VisuallyHidden>
        </dt>
        <dd className={alpakaStyles.nickname}>{nickname}</dd>
        <dt>
          <VisuallyHidden>geboren</VisuallyHidden>
        </dt>
        <dd className={alpakaStyles.birthYear}>*{birthYear}</dd>
        <dt>
          <VisuallyHidden>Beschreibung</VisuallyHidden>
        </dt>
        <dd className={alpakaStyles.description}>{description}</dd>
      </dl>
      {isLast ? null : <tr className={alpakaStyles.trenner} />}
    </div>
  )
}

export const alpakaStyles = {
  container: css`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  aboutContainer: css`
    margin: 0 ${marginLeftRight}px;
  `,
  nickname: css`
    font-size: 20px;
    text-align: center;
    margin-top: 0;
  `,
  birthYear: css`
    text-align: center;
    margin-top: 20px;
  `,
  description: css`
    margin-top: 20px;
    line-height: 1.4;
  `,
  trenner: css`
    width: 60%;
    margin-top: 50px;
    border-bottom: 1px solid #373a47;
    opacity: 0.5;
  `,
}
