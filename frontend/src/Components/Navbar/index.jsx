import { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './index.scss';
import { useAuth } from '../../Providers/authContext';

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser } = useAuth();
  const toggle = () => setDropdownOpen(prevState => !prevState);
  console.log(currentUser);

  return (
    <>
      <Route path='/'>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to='/'>
                <img src='/assets/logo.svg' alt='' />
              </Link>
            </li>
            <li>
              <Link to='About'>About us</Link>
            </li>
            <li>
              <Link to='Contact'>Contact us</Link>
            </li>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Categories</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ul>
          <ul className='buttons'>
            {/* <Link to='TBD'>
              <Button variant='outlined' color='primary'>
                Add your telegram group
              </Button>
            </Link> */}
            <Link to='/New/Group'>
              <Button variant='contained' color='primary'>
                Add new
              </Button>
            </Link>
            {currentUser ? (
              currentUser.email
            ) : (
              <>
                <Link to='Login'>
                  <Button variant='contained' color='primary'>
                    Login
                  </Button>
                </Link>
                <Link to='Register'>
                  <Button variant='contained'>Register</Button>
                </Link>
              </>
            )}
          </ul>
        </nav>
      </Route>
    </>
  );
};
