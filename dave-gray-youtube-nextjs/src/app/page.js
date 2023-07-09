import Image from 'next/image'
import Link from 'next/link'
//import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <Link href="/about">Go to About Page</Link>
    </>
  )
}
