import { useState } from 'react';
import Link from 'next/link';

import Dropdown from './Dropdown';

import { useTheme } from '../src/providers/DarkModeProvider';

import Auth from '../src/helpers/Auth';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const { authenticated, logout } = Auth();

  const [open, setOpen] = useState(false);

  const onToggleTheme = () => {
    setTheme();
    document.getElementById('root').classList.toggle('dark');
  };

  return (
    <div
      role='navigation'
      className='flex items-center justify-between pt-6'
    >
      <ul className='flex items-center justify-center list-none'>
        <p className='mr-4 py-2 px-4 rounded-sm bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium'>
          <Link to='/'>Home</Link>
        </p>
        <li className='mr-4 py-2 px-4 rounded-sm bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium'>
          <Link to='/about'>About us</Link>
        </li>
        <li className='mr-4 py-2 px-4 rounded-sm bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium'>
          <Link to='/contact'>Contact us</Link>
        </li>
        <Dropdown title='Categories' />
      </ul>
      <ul className='flex items-center justify-center list-none'>
        <p className='mr-4 py-2 px-4 rounded-sm bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium shadow-sm'>
          <Link to='/new/group'>Add new</Link>
        </p>
        {authenticated ? (
          <>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button className='transition bg-altdark p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                <span className='sr-only'>View notifications</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>
              <div className='mx-6 relative'>
                <div>
                  <button
                    onClick={() => setOpen(!open)}
                    className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    aria-haspopup='true'
                  >
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </button>
                </div>
                <div
                  className={
                    open
                      ? 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
                      : 'hidden'
                  }
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                >
                  <Link
                    to='/user/profile'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Your Profile
                  </Link>
                  <Link
                    to='/user/settings'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Settings
                  </Link>
                  <Link
                    to='/'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                    onClick={() => logout()}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className='mr-4 py-2 px-4 rounded-sm bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium shadow-sm'>
              <Link to='/login'>Login</Link>
            </p>
            <p className='mr-4 py-2 px-4 rounded-sm bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium shadow-sm'>
              <Link to='/register'>Register</Link>
            </p>
          </>
        )}

        <div
          onClick={onToggleTheme}
          className='select-none mr-4 py-2.5 px-2 rounded-sm bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium cursor-pointer shadow-sm'
        >
          <img
            src={
              theme === 'dark'
                ? '/assets/illustrations/moon.svg'
                : '/assets/illustrations/sun.svg'
            }
            alt={
              theme === 'dark'
                ? '/assets/illustrations/moon.svg'
                : '/assets/illustrations/sun.svg'
            }
          />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
