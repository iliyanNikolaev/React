import styles from './layout.module.css';

export default function layout({ children }) {
  return (
    <div>
        <h1 className={styles.title}>Our works</h1>
        {children}
    </div>
  )
}
