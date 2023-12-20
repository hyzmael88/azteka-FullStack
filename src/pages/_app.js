import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { AppProvider } from '@/context/AppContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='w-full h-full max-w-[1444px] mx-auto'>
      <AppProvider>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </AppProvider>
    </div>
  )
}
