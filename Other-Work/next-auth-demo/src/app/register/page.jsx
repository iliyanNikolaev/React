"use client";
import styles from './page.module.css'; 
import { useState } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import Error from '@/components/error/Error';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();

  const { setAuth } = useAuthContext();

  const [error, setError] = useState('');
  
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });
  const onChange = (e) => {
    setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const { username, password } = formValues;

    if (!username || !password) {
      return setError('All fields are required!');
    }

    try {
      const res = await fetch('api/register', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password: password.trim() })
      });

      if (!res.ok) {
        const error = await res.json();
        return setError(error.message);
      }

      const user = await res.json();
      setFormValues({
        username: '',
        password: ''
      });

      setAuth(user);
      router.push('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1 className={styles.title}>Register</h1>
        <input
          className={styles.input}
          name="username"
          type="text"
          placeholder='Enter an username...'
          value={formValues.username}
          onChange={onChange}
        />
        <input
          className={styles.input}
          name="password"
          type="password"
          placeholder='Enter a password...'
          value={formValues.password}
          onChange={onChange}
        />
        {error && <Error message={error} setError={setError} />}
        <button className={styles.button}>Register</button>
      </form>
    </div>
  )
}