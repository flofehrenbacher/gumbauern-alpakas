import { Global, css } from '@emotion/react'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'
import { AppWrapper, ContentWrapper } from 'components/shared'
import emotionReset from 'emotion-reset'
import 'leaflet/dist/leaflet.css'
import { AppComponent, AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: AppComponent
  pageProps: AppProps
}) {
  return (
    <AppWrapper>
      <Head>
        <title>Gumbauern-Alpakas - Alpakawanderung im Landkreis Neumarkt</title>
      </Head>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
          ${emotionReset}
          html {
            font-family: 'Handlee', Helvetica, Arial, sans-serif;
            color: #394e59;
            font-weight: 500;
          }
          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
          /* Hot fix for carousel background */
          .carousel .slide {
            background: none !important;
          }

          .no-scroll {
            overflow: hidden;
          }
        `}
      />
      <Navigation />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  )
}
