import Link from 'next/link';
import styles from './button.module.css';

export default function Button({ href, content }) {
    return (
        <Link href={href}>
            <button className={styles.button}>{content}</button>
        </Link>
    )
}
