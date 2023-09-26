import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-Auth Demo',
  description: 'Tutorial from youtube channel - Dave Gray',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='navigation'>
          <Link href='/login'>Login</Link>
          <Link href='/register'>Register</Link>
        </nav>
        <div className='wrapper'>
          {children}
        </div>
      </body>
    </html>
  )
}
