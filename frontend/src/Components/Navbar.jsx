import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

import moon from '../Styles/assets/illustrations/moon.svg';
import sun from '../Styles/assets/illustrations/sun.svg';

import { useTheme } from '../Providers/DarkModeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const onToggleTheme = () => {
    toggleTheme();
    document.getElementById('root').classList.toggle('dark');
  };

  return (
    <div
      role='navigation'
      className='flex items-center justify-between pt-6'
    >
      <ul className='flex items-center justify-center list-none'>
        <p className='mr-4 py-1 px-4 rounded-sm bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium'>
          <Link to='/'>Home</Link>
        </p>
        <li className='mr-4 py-1 px-4 rounded-sm bg-altdark dark:bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium'>
          <Link to='/about'>About us</Link>
        </li>
        <li className='mr-4 py-1 px-4 rounded-sm bg-altdark dark:bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium'>
          <Link to='/contact'>Contact us</Link>
        </li>
        <Dropdown title='Categories' />
      </ul>
      <ul className='flex items-center justify-center list-none'>
        <p className='mr-4 py-1 px-4 rounded-sm bg-altdark dark:bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium shadow-sm'>
          <Link to='/new/group'>Add new</Link>
        </p>

        <p className='mr-4 py-1 px-4 rounded-sm bg-altdark dark:bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium shadow-sm'>
          <Link to='/login'>Login</Link>
        </p>
        <p className='mr-4 py-1 px-4 rounded-sm bg-altdark dark:bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium shadow-sm'>
          <Link to='/register'>Register</Link>
        </p>
        <div className='mr-4 py-1.5 px-2 rounded-sm bg-altdark dark:bg-altdark dark:text-white hover:bg-mainhover transition-all font-medium cursor-pointer shadow-sm'>
          <img
            onClick={onToggleTheme}
            src={theme === 'dark' ? moon : sun}
            alt={theme === 'dark' ? moon : sun}
          />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
