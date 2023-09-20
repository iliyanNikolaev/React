import Link from "next/link";
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>first-post</h1>
      <Link href="/">Back to home</Link>
    </>
  )
}
