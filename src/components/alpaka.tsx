import VisuallyHidden from '@reach/visually-hidden'
import React from 'react'
import { Alpaka, layoutStyles } from '../pages/unsere-tiere'
import { ResponsiveImage } from './responsive-image'
import { css } from 'emotion'
import { CustomCarousel } from './custom-carousel'

export function SingleAlpaka({
  name,
  nickname,
  birthYear,
  description,
}: Alpaka) {
  return (
    <div className={alpakaStyles.container}>
      <h2 className={layoutStyles.secondaryHeadline}>{name}</h2>
      <div className={alpakaStyles.ratioContainer}>
        <CustomCarousel>
          <ResponsiveImage
            className={alpakaStyles.img}
            lazy={false}
            src={`/img/${name.toLowerCase()}/${name.toLowerCase()}_1.jpg`}
            alt={name}
          />
          <ResponsiveImage
            className={alpakaStyles.img}
            lazy={false}
            src={`/img/${name.toLowerCase()}/${name.toLowerCase()}_2.jpg`}
            alt={name}
          />
          <ResponsiveImage
            className={alpakaStyles.img}
            lazy={false}
            src={`/img/${name.toLowerCase()}/${name.toLowerCase()}_3.jpg`}
            alt={name}
          />
        </CustomCarousel>
      </div>
      <dl>
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
    </div>
  )
}

export const alpakaStyles = {
  container: css`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  nickname: css`
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
  `,
  img: css`
    width: 100%;
    height: auto;
  `,
  birthYear: css`
    text-align: center;
    margin-top: 20px;
  `,
  description: css`
    margin-top: 20px;
    line-height: 1.4;
  `,
  ratioContainer: css`
    width: 320px;
    max-width: 100vw;
    height: 180px;
    overflow: hidden;
    margin-top: 20px;
  `,
}
