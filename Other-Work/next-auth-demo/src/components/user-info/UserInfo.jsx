"use client"
import styles from './UserInfo.module.css';
import { useSession } from 'next-auth/react';

export default function UserInfo() {

  const session = useSession();
  let user = {};
  if(session.status == 'authenticated'){
    user = session.data.user.name;
  }
  
  return (
    <div className={styles.container}>
      <p>{session.status == 'authenticated' ? `${user.username}` : 'not auth'}</p>
      {/* todo.... */}
    </div>
  )
}
