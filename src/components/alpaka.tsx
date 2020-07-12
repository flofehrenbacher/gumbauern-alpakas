import VisuallyHidden from '@reach/visually-hidden'
import React from 'react'
import type { Alpaka } from '../pages/unsere-tiere'
import { ResponsiveImage } from './responsive-image'
import { css } from 'emotion'

export function SingleAlpaka({
  name,
  nickname,
  birthYear,
  description,
}: Alpaka) {
  return (
    <dl>
      <dt>
        <VisuallyHidden>Name</VisuallyHidden>
      </dt>
      <dd>{name}</dd>
      <dt>
        <VisuallyHidden>Spitzname</VisuallyHidden>
      </dt>
      <dd>{nickname}</dd>
      <dt>
        <VisuallyHidden>geboren</VisuallyHidden>
      </dt>
      <dd>*{birthYear}</dd>
      <dt>
        <VisuallyHidden>Beschreibung</VisuallyHidden>
      </dt>
      <dd>{description}</dd>
      <ResponsiveImage
        className={style.img}
        lazy={false}
        src={`data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
    9TXL0Y4OHwAAAABJRU5ErkJggg==`}
        alt={name}
      />
    </dl>
  )
}

const style = {
  img: css`
    width: 100px;
    height: auto;
  `,
}
