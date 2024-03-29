"use client"
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Error from '@/components/error/Error';
import { signIn } from 'next-auth/react';

export default function Login() {
  const router = useRouter();

  const [error, setError] = useState('');

  const submitHandler= async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    if (!username || !password) {
      return setError('All fields are required!');
    }
    try {
      const res = await signIn('credentials', { username: username.trim(), password: password.trim(), redirect: false});
      
      if(res.error) {
        return setError('Invalid credentials');
      }

      router.replace('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1 className={styles.title}>Login</h1>
        <input 
          className={styles.input}
          type="text" 
          placeholder='Enter an username...' 
          />
        <input 
          className={styles.input} 
          type="password" 
          placeholder='Enter a password...' 
          />

        {error && <Error message={error} setError={setError} />}

        <button className={styles.button}>Login</button>
      </form>
    </div>
  )
}
