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

const isServer = typeof window === 'undefined';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
  });

  // const { register, user, setUser } = useAuth();
  const router = useRouter();

  const onInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      // const { success, token } = await register(formData);
      if (!isServer) localStorage.setItem('token', token);
      success && useRouter.push('/dashboard');
    } catch (error) {
      console.log(error);
      // TODO: display error
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
          <form
            onSubmit={registerUser}
            onChange={onInputChange}
            className={form}
          >
            <div>
              <h2>register</h2>
            </div>
            <input
              className={input}
              name='name'
              type='text'
              aria-label='name input'
              placeholder='Your name*'
            />
            <input
              className={input}
              name='lastname'
              type='text'
              aria-label='lastname input'
              placeholder='Your lastname*'
            />
            <input
              className={input}
              name='email'
              type='email'
              aria-label='email input'
              placeholder='Your email*'
            />
            <input
              className={input}
              name='password'
              type='password'
              aria-label='password input'
              placeholder='Your password*'
            />
            <input
              className={input}
              name='password2'
              type='password'
              aria-label='password confirmation input'
              placeholder='Confirm your password*'
            />
            <button className={btn} type='submit'>
              submit form
            </button>
            <div className={switchPage}>
              Don't have an account?
              <Link href='/login'>
                <a> log in</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
