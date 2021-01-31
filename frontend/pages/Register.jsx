import { useState } from 'react';
import { Link } from 'next/link';

const isServer = typeof window === 'undefined';

import { useAuth } from '../src/providers/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
  });

  const { register, user, setUser } = useAuth();
  const history = useHistory();

  const onInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const { success, token } = await register(formData);
      if (!isServer) localStorage.setItem('token', token);
      success && history.push('/dashboard');
    } catch (error) {
      console.log(error);
      // TODO: display error
    }
  };
  // bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-900
  return (
    <div className='flex justify-center items-center min-h-screen h-64 bg-purple-800'>
      <div className='flex items-center justify-center rounded shadow overflow-hidden h-3/5'>
        <p className='absolute top-0 w-10/12 pt-6'>
          <Link
            className='py-1 px-2 dark:bg-gray-600 dark:text-white hover:bg-mainhover rounded-sm transition-all font-medium'
            to='/'
          >
            Home
          </Link>
        </p>

        <div className='h-full'>
          <video
            className='max-w-screen-sm w-64 max-h-full object-fill'
            // muted autoPlay loop
          >
            <source type='video/mp4' src='/assets/charles-parker.mp4' />
          </video>
        </div>

        <div className='p-8 dark:bg-altdark h-full bg-gray-600'>
          <form
            className='flex flex-col justify-center items-center h-full'
            onSubmit={registerUser}
          >
            <h2 className='text-shadow my-4 text-3xl'>Sign Up</h2>
            <input
              className='w-52 font-medium bg-gray-300 text-altdark border-none outline-none py-1 px-2 rounded-sm mb-2 text-sm focus:bg-white transition-all duration-500'
              name='name'
              onChange={onInputChange}
              value={formData.name}
              type='text'
              placeholder='First name'
            />
            <input
              className='w-52 font-medium bg-gray-300 text-altdark border-none outline-none py-1 px-2 rounded-sm mb-2 text-sm focus:bg-white transition-all duration-500'
              name='lastname'
              onChange={onInputChange}
              value={formData.lastname}
              type='text'
              placeholder='Last name'
            />
            <input
              className='w-52 font-medium bg-gray-300 text-altdark border-none outline-none py-1 px-2 rounded-sm mb-2 text-sm focus:bg-white transition-all duration-500'
              name='email'
              onChange={onInputChange}
              value={formData.email}
              type='text'
              placeholder='Your email'
            />
            <input
              className='w-52 font-medium bg-gray-300 text-altdark border-none outline-none py-1 px-2 rounded-sm mb-2 text-sm focus:bg-white transition-all duration-500'
              name='password'
              onChange={onInputChange}
              value={formData.password}
              type='password'
              placeholder='Create password'
            />
            <input
              className='w-52 font-medium bg-gray-300 text-altdark border-none outline-none py-1 px-2 rounded-sm mb-2 text-sm focus:bg-white transition-all duration-500'
              name='password2'
              onChange={onInputChange}
              value={formData.password2}
              type='password'
              placeholder='Confirm password'
            />
            <button
              className='shadow mt-4 mb-4 py-1 rounded-sm transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-none text-white hover:bg-altdark hover:text-white dark:hover:bg-altprimary font-medium ring-1 ring-white md:ring-white w-40'
              type='submit'
            >
              Register
            </button>
            <p className='text-xs dark:opacity-50 opacity-75'>
              Already have an account?{' '}
              <Link
                className='hover:text-altprimary transition'
                to='/login'
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
