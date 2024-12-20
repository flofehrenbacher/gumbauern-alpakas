import { css } from '@emotion/react'
import React, { ReactNode } from 'react'
import { Carousel, CarouselProps } from 'react-responsive-carousel'

export function CustomCarousel({
  children,
}: {
  children: CarouselProps['children']
}) {
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
