"use client";
import { useState } from 'react';
import styles from './page.module.css';
import Error from '@/components/error/Error';

export default function Register() {

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
      const resUserExist = await fetch('api/isUserExist', {
        method: 'post',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({ username: username.trim()})
      });

      const user = await resUserExist.json();

      if(user) {
        return setError('This user already exist.');
      }

      const res = await fetch('api/register', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password: password.trim() })
      });

      if (res.ok) {
        setFormValues({
          username: '',
          password: ''
        });
      } else {
        setError('Regisration failed!');
      }

    } catch (err) {
      console.log(err);
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