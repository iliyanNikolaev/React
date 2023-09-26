import styles from './page.module.css';
import UserInfo from '@/components/user-info/UserInfo';

export default function Home() {
  return (
    <div className={styles.container}>
      <UserInfo/>
    </div>
  )
}
