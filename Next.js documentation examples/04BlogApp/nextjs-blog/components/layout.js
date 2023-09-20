import Link from 'next/link'
import React from 'react'

export default function Layout( {children} ) {
  return (
    <>
        <nav>
            <Link href='/'>home</Link>
            <Link href='/posts/first-post'>first-post</Link>
        </nav>

        { children }
    </>
  )
}
