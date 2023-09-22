import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1 className={styles.title}>I'm Iliyan and i learn Next.js while developing this app</h1>

        <p className={styles.desc}>Next.js: JavaScript framework for fast web apps, built on React, with server-side rendering, pre-rendering, and intuitive routing for optimal performance.</p>

        <button className={styles.button}>
          my js path
        </button>
      </div>
      <div className={styles.img}>
        <Image src={'/keyboardmonitor.png'} width={524} height={486} alt='dashimg' />
      </div>
    </div>
  )
}
