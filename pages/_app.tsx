import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Stars from '../components/Stars'
import { Open_Sans } from 'next/font/google'


const open_sans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['500']
})

export default function App({ Component, pageProps }: AppProps) {
  return(
      <main className={open_sans.className}>
        <Stars/>
        <Navbar/>
        <Component {...pageProps} />
      </main>
  )
}
