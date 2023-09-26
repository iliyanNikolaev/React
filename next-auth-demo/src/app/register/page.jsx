import styles from './page.module.css';

export default function Register() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Register</h1>
        <input className={styles.input} type="text" placeholder='Enter an username...' />
        <input className={styles.input} type="password" placeholder='Enter a password...' />
        <button className={styles.button}>Register</button>
      </form>
    </div>
  )
}