import {
  button,
  container,
  flex,
  form,
  input,
  outerContainer,
  ul,
} from 'styles/Navbar.module.scss';

import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={outerContainer}>
      <div className={container}>
        <div className={flex}>
          <Link href='/'>
            <a>LOGO</a>
          </Link>
          <form className={`${form} ${flex}`}>
            <input
              className={input}
              type='text'
              placeholder='Search channels and groups. Try cute doggos!'
            />
            <button className={button} type='submit'>
              Search
            </button>
          </form>
        </div>
        <div>
          <ul className={`${ul} ${flex}`}>
            <li>
              <Link href='#'>
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href='/login'>
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href='/register'>
                <a>Sign up</a>
              </Link>
            </li>
            <li>
              <Link href='/new'>
                <a>add channel</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
