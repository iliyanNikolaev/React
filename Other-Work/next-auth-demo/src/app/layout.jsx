import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import AuthProvider from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Authentication App',
  description: 'Custom authentication system with Next.js, MongoDB, bcrypt, jwt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <nav className='navigation'>
            <Link href='/login'>Login</Link>
            <Link href='/register'>Register</Link>
          </nav>
          <div className='wrapper'>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
