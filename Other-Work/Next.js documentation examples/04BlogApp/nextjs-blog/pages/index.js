import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js demo</title>
      </Head>
      <h1>Next.js learn documentation - demo project</h1>
      <Link href="/posts/first-post">First Post</Link>
      <Image
        src="/images/ilich.jpg"
        width={144}
        height={144}
        alt='ilich' />
    </>
  )
}
