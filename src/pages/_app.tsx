import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app'
import 'assets/styles/globals.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain='mevrouwderecruiter.nl' trackOutboundLinks>
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
