import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Aclonica } from '@next/font/google'
const aclonica = Aclonica({
  subsets:['latin'],
  weight:['400'],
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={aclonica.className}>
      <Component {...pageProps} />
    </main>

  )
  
}
