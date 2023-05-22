import React from 'react'
import { AppProps } from 'next/app'
import { Provider, state } from '@store'
import '@assets/css/index.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider state={state}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
