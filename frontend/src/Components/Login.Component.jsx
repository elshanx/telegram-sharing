import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import bgImage from '../Styles/assets/signin.png';

import { useAuth } from '../Providers/AuthContext';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser, login } = useAuth();

  const history = useHistory();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log({ data });
      // success && history.push('/currentUser/:id');
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div className='font-medium dark:bg-primary bg-altprimary p-4 overflow-hidden max-h-screen'>
      <p>
        <Link
          className='py-1 px-2 dark:bg-altdark dark:text-white hover:bg-mainhover rounded-sm transition-all font-medium'
          to='/'
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
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          aria-label='email input'
          placeholder='Your email*'
        />
        <input
          className='w-52 font-medium bg-gray-300 text-altdark border-none outline-none py-1 px-2 rounded-sm mb-2 text-sm focus:bg-white transition-all duration-500'
          value={password}
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
            to='/register'
          >
            Sign up
          </Link>
        </p>
      </form>
      <div>
        <img src={bgImage} alt='' />
      </div>
    </div>
  );
};

export default LoginComponent;
