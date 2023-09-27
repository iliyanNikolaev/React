"use client"
import styles from './UserInfo.module.css';
import { useSession } from 'next-auth/react';

export default function UserInfo() {

  const session = useSession();
  console.log(session);
  
  return (
    <div className={styles.container}>
      <p>{false ? `${auth.username}` : 'not auth'}</p>
      {/* todo.... */}
    </div>
  )
}
