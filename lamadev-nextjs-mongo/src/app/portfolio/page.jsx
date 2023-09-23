import Link from 'next/link';
import styles from './page.module.css';

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Our works</h1>

            <div className={styles.projects}>

                <Link className={styles.project} href={'https://github.com/iliyanNikolaev/movies-react-app'} target='_blank'>
                    <span className={styles.innerTitle}>movies-app</span>
                </Link>

                <Link className={styles.project} href={'https://github.com/iliyanNikolaev/social-horizon-pc-client'} target='_blank'>
                    <span className={styles.innerTitle}>social-app</span>
                </Link>
            </div>
        </div>
    )
}
