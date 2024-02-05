import { Inter } from 'next/font/google'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import { ContextProvider } from '@/context/connect'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lowest Price Price in Pakistan',
  description: 'Lowest Mobile Price in Pakistan',
}

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ContextProvider>
  )
}
