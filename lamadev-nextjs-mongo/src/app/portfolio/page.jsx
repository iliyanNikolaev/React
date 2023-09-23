import Link from 'next/link';
import styles from './page.module.css';

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Projects</h2>

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
