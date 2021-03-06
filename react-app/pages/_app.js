// pages/_app.js
import React from 'react'
import Head from 'next/head'

import AppWrapper from '../AppWrapper/AppWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head>
        <title>Muidem - Create articles for the world</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Raleway:wght@700&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
