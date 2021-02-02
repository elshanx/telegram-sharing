import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { useAuth } from '../../src/providers/AuthContext';
import Auth from '../../src/helpers/Auth';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url('/assets/loginBgImage.jpeg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, setUser] = useAuth();
  const { login } = Auth();

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

  const { root, image } = useStyles();

  return (
    <Grid container component='main' className={root}>
      <Grid item xs={false} sm={4} md={7} className={image} />
      <Grid item xs={12} sm={8} md={5}>
        <>
          <div className='font-medium dark:bg-primary bg-altprimary p-4 overflow-hidden max-h-screen'>
            <p>
              <Link
                className='py-1 px-2 dark:bg-altdark dark:text-white hover:bg-mainhover rounded-sm transition-all font-medium'
                href='/#'
              >
                Home
              </Link>
            </p>
            <form
              onSubmit={signIn}
              className='flex flex-col justify-center items-center'
            >
              <div className='text-shadow my-4 text-3xl'>Log in</div>
              <input
                className='w-52 font-medium bg-gray-300 text-altdark border-none outline-none py-1 px-2 rounded-sm mb-2 text-sm focus:bg-white transition-all duration-500'
                value={email}
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                aria-label='email input'
                placeholder='Your email*'
              />
              <input
                className='w-52 font-medium bg-gray-300 text-altdark border-none outline-none py-1 px-2 rounded-sm mb-2 text-sm focus:bg-white transition-all duration-500'
                value={password}
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                aria-label='password input'
                placeholder='Your password*'
              />
              <button
                className='shadow mt-2 mb-4 py-1 rounded-sm transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-none text-white dark:hover:bg-altdark hover:bg-white hover:text-altprimary dark:hover:text-white font-medium ring-1 ring-white md:ring-white w-40'
                type='submit'
              >
                Log in
                {/* TODO: on click change text and animate */}
              </button>
              <p className='text-xs dark:opacity-50 opacity-75'>
                Don't have an account?{' '}
                <Link
                  className='dark:hover:text-altprimary hover:text-white hover:opacity-100 transition'
                  href='/register'
                >
                  Sign up
                </Link>
              </p>
            </form>
            <div>
              <img src='/assets/signin.png' alt='' />
            </div>
          </div>
        </>
      </Grid>
    </Grid>
  );
};

export default Login;
