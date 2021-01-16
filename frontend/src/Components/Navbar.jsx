import { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import '../Styles/Sass/Navbar.scss';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
              <Link to='about'>About us</Link>
            </li>
            <li>
              <Link to='contact'>Contact us</Link>
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
            <Link to='/new/group'>
              <Button variant='contained' color='primary'>
                Add new
              </Button>
            </Link>

            <Link to='login'>
              <Button variant='contained' color='primary'>
                Login
              </Button>
            </Link>
            <Link to='register'>
              <Button variant='contained'>Register</Button>
            </Link>
          </ul>
        </nav>
      </Route>
    </>
  );
};

export default Navbar;
