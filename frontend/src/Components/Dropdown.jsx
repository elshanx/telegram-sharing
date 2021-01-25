import { useState } from 'react';

const Dropdown = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          className='flex justify-center w-full rounded-sm border-none shadow-sm py-1 px-4 bg-altdark transition-all hover:bg-mainhover font-medium text-white focus:outline-none outline-none'
          id='options-menu'
          aria-haspopup='true'
          aria-expanded='true'
        >
          <h2>{title}</h2>

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
        </button>
      </div>
      <div className='hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
        <div
          className='py-1'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            role='menuitem'
          >
            Account settings
          </a>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            role='menuitem'
          >
            Support
          </a>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            role='menuitem'
          >
            License
          </a>
          <form method='POST' action='#'>
            <button
              type='submit'
              className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
              role='menuitem'
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
