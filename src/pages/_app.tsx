import 'assets/styles/globals.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
