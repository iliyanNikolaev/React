import styles from './page.module.css';
import Error from '@/components/error/Error';
export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input className={styles.input} type="text" placeholder='Enter an username...' />
        <input className={styles.input} type="password" placeholder='Enter a password...' />
        <Error message='this is hardcoded error' />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  )
}
