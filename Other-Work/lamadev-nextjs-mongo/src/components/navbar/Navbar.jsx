"use client"
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link'
import Toggle from '../theme-toggle/Toggle';
import LogoutButton from '../logout-button/LogoutButton';
import getSession from '@/utils/getSession';

export default function Navbar() {
    const session = getSession();

    return (
        <div className={styles.container}>
            <div>
                <Link href='/' className={styles.logo}>
                    <Image src={'/nextjsicon.png'} width={36} height={36} alt='next.js' />
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
                {(session.status == 'unauthenticated' || session.status == 'loading') && <>
                    <Link href='/login'>Login</Link>
                    <Link href='/register'>Register</Link></>}
                {session.status == 'authenticated' && <LogoutButton />}
            </div>
        </div>
    )
}
