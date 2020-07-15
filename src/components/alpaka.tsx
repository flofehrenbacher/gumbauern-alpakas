import VisuallyHidden from '@reach/visually-hidden'
import React from 'react'
import { Alpaka, layoutStyles } from '../pages/unsere-tiere'
import { ResponsiveImage } from './responsive-image'
import { css } from 'emotion'

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
        <ResponsiveImage
          className={alpakaStyles.img}
          lazy={false}
          src={`data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
    9TXL0Y4OHwAAAABJRU5ErkJggg==`}
          alt={name}
        />
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
    margin-top: 20px;
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
