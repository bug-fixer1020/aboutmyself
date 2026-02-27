import { Poppins, Playfair_Display, Outfit } from 'next/font/google'
import './globals.css'
import ThreeWaveBackground from './custmstyle/ThreeWaveBackground'
import { Toaster } from 'react-hot-toast'
import Footer from './footer/page'
import Navbar from './navbar/page'

const poppins = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Opu | MERN Stack Portfolio',
  description: 'Portfolio of Opu, full stack MERN developer.',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${outfit.variable} antialiased`}>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <div className="luxury-mesh relative z-10"></div>
        <ThreeWaveBackground />
        {children}
        <Footer />
      </body>
    </html>
  )
}
