import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          onClick={() => setOpen(!open)}
          type='button'
          className='flex justify-center w-full rounded-sm border-none shadow-sm py-2 px-4 bg-altdark transition-all hover:bg-mainhover font-medium text-white focus:outline-none outline-none'
          aria-haspopup='true'
          aria-expanded='true'
        >
          <h2>{title}</h2>

          {!open ? (
            <svg
              className='-mr-3 ml-2 h-6 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              className='-mr-3 ml-2 h-6 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                clip-rule='evenodd'
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={
          open
            ? 'origin-top-right absolute right-0 mt-2 w-40 rounded shadow-lg font-medium bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300'
            : 'transition duration-300 hidden'
        }
      >
        <div
          className='py-1'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <Link
            to='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300'
            role='menuitem'
          >
            Some Group
          </Link>
          <Link
            to='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300'
            role='menuitem'
          >
            Some Channel
          </Link>
          <Link
            to='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300'
            role='menuitem'
          >
            Some
          </Link>
          <Link
            to='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300'
            role='menuitem'
          >
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
