import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import AuthProvider from '@/components/auth-provider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Authentication App',
  description: 'Auth system with Next.js, NextAuth.js, MongoDB and mongoose',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <nav className='navigation'>
            <Navbar />
          </nav>
          <div className='wrapper'>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
