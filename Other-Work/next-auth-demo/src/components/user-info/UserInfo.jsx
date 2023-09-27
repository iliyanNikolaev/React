"use client"
import styles from './UserInfo.module.css';
import { useSession } from 'next-auth/react';

export default function UserInfo() {

  const {data, status} = useSession();
  console.log(data)
  return (
    <div className={styles.container}>
      <p>{status == 'authenticated' ? 'authenticated' : 'not auth'}</p>
      {/* todo.... */}
    </div>
  )
}
