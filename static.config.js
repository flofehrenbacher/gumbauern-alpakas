import React from 'react'
import path from 'path'
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="de">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Alpakawandern im idyllischen Kleinberghausen - Alpakawanderung in der
          Oberpfalz
        </title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData: () => ({
    siteTitle: 'Alpakas sind cool',
    metaDescription: 'Beschreibungen rocken',
  }),
  getRoutes: () => [
    {
      path: '/ueber-alpakas',
      getData: async () => ({
        title: 'Alles was sie jemals über Alpakas wissen wollten',
      }),
    },
  ],

  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-emotion',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
  ],
}
