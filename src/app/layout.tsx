import './globals.css'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'
import { AppWrapper, ContentWrapper } from 'components/shared'

import 'leaflet/dist/leaflet.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Gumbauern-Alpakas - Alpakawanderung im Landkreis Neumarkt</title>
        <meta name="theme-color" content="#dfd3c3" />
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
      </body>
    </html>
  )
}
