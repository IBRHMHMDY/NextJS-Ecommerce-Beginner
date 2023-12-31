import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemesContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce - Online',
  description: 'Generated Landing Page E-Commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <ThemeProvider>
            <div className='container'>
              <Header />
                {children}
              <Footer />
            </div>
          </ThemeProvider>
        </body>
    </html>
  )
}
