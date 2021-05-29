// pages/_app.js
import React from 'react'
import Head from 'next/head'

import AppWrapper from '../AppWrapper/AppWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head>
        <title>Muidem - Create articles for the world</title>
      </Head>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
