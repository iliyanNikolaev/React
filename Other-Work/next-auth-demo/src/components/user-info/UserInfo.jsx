"use client"
import styles from './UserInfo.module.css';
import { useAuthContext } from '@/context/AuthContext';
export default function UserInfo() {

  const { auth } = useAuthContext();

  return (
    <div className={styles.container}>
      <p>{auth ? `${auth.username}` : 'not auth'}</p>
    </div>
  )
}
