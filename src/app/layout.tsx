import './global-css'
import { Footer } from '../components/footer'
import { Navigation } from '../components/navigation'
import { AppWrapper, ContentWrapper } from '../components/shared'

import '@pigment-css/react/styles.css'
import 'leaflet/dist/leaflet.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { SanityLive } from '../sanity/lib/live'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Gumbauern-Alpakas - Alpakawanderung im Landkreis Neumarkt</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');`,
          }}
        />
      </head>
      <body>
        <AppWrapper>
          <Navigation />
          <ContentWrapper>{children}</ContentWrapper>
          <Footer />
        </AppWrapper>
        <SanityLive />
      </body>
    </html>
  )
}
