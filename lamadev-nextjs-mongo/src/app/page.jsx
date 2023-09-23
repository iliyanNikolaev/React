import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1 className={styles.title}>Innovate, Code, Envision - Welcome to the Future of Software!</h1>

        <p className={styles.desc}>Our company builds modern and fast web applications, utilizing Next.js to ensure the best user experience and development efficiency.</p>
        
        <Button href={'/about'} content={'About us'}/>

      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.image} src={'/bluedev.png'} width={520} height={520} alt='dashimg' />
      </div>
    </div>
  )
}
