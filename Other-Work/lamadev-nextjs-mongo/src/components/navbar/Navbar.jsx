import Image from 'next/image';
import styles from './Navbar.module.css';

import Link from 'next/link'
import Toggle from '../theme-toggle/Toggle';

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div>
                <Link href='/' className={styles.logo}>
                    <Image src={'/nextjsicon.png'} width={36} height={36} alt='next.js'/>
                    <span>InnovateTech</span>
                </Link>
            </div>

            <div className={styles.links}>
                <Toggle />
                <Link href='/blog'>Blog</Link>
                <Link href='/about'>About</Link>
                <Link href='/contacts'>Contacts</Link>
                <Link href='/dashboard'>Dashboard</Link>
                <Link href='/portfolio'>Portfolio</Link>
                <>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
                <Link href='/logout'>Logout</Link>
                </>
            </div>
        </div>
    )
}
