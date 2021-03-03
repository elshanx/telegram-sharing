import {
  btn,
  container,
  flex,
  form,
  formContainer,
  fullHeight,
  input,
  left,
  right,
  switchPage,
  toHome,
} from 'styles/loginAndReg.module.scss';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      res.ok && router.push('/');
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div className={container}>
      <div className={left}>
        <p className={toHome}>
          <Link href='/'>Home</Link>
        </p>
        <div className={`${flex} ${fullHeight}`}>
          <h1>some cool text</h1>
        </div>
      </div>
      <div className={right}>
        <div className={formContainer}>
          <form className={form} onSubmit={signIn}>
            <div>
              <h2>log in</h2>
            </div>
            <input
              className={input}
              value={email}
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              aria-label='email input'
              placeholder='Your email*'
            />
            <input
              className={input}
              value={password}
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              aria-label='password input'
              placeholder='Your password*'
            />
            <button className={btn} type='submit'>
              Log in
            </button>
            <div className={switchPage}>
              Don't have an account?
              <Link href='/register'>
                <a> Sign up</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
