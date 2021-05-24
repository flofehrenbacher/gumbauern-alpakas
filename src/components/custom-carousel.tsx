import { css } from '@emotion/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export function CustomCarousel({ children }: { children: React.ReactChild[] }) {
  return (
    <Carousel
      showStatus={false}
      infiniteLoop
      swipeable
      dynamicHeight
      useKeyboardArrows
      showThumbs={false}
      css={css`
        margin-top: 30px;
        width: 100%;
      `}
    >
      {children}
    </Carousel>
  )
}
