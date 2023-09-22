import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.container}>
      <span>iliyanNikolaev. All rights reserved</span>
      <Link href={'https://github.com/iliyanNikolaev'} target='_blank'>
        <Image src={'/githubicon.png'} height={36} width={64} alt='github' />
      </Link>
    </div>
  )
}
