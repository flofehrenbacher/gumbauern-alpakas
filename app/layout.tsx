import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './global.css'

import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'
import { AppWrapper, ContentWrapper } from '../src/components/shared'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <title>Gumbauern-Alpakas - Alpakawanderung im Landkreis Neumarkt</title>
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
