import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Dropdown from './Dropdown';

import moon from '../Styles/assets/illustrations/moon.svg';
import sun from '../Styles/assets/illustrations/sun.svg';

import { useTheme } from '../Providers/DarkModeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const onToggleTheme = () => {
    toggleTheme();
    console.log(theme);
  };

  return (
    <StyledNavbar>
      <StyledUl links>
        <p>
          <Link to='/'>Home</Link>
        </p>
        <li>
          <Link to='about'>About us</Link>
        </li>
        <li>
          <Link to='contact'>Contact us</Link>
        </li>
        <Dropdown title='Categories' />
      </StyledUl>
      <StyledUl>
        <Link to='/new/group'>
          <Button>Add new</Button>
        </Link>
        <Link to='login'>
          <Button login>Login</Button>
        </Link>
        <Link to='register'>
          <Button register>Register</Button>
        </Link>
        <StyledSvgContainer>
          <img
            onClick={onToggleTheme}
            src={theme === 'dark' ? moon : sun}
            alt=''
          />
        </StyledSvgContainer>
      </StyledUl>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  padding: 1.5rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  & a:not(last-child) {
    margin-right: 1rem;

    ${({ links }) =>
      links &&
      `
    &:hover {
      background: rgb(51, 51, 51, 0.5);
    }
    
    padding: 0.5rem;
    background: #333;
    border-radius: 5px;

    `};
  }
`;

const Button = styled.button`
  padding: 0.5rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in;
  font-weight: 500;
  font-size: 0.8rem;
  outline: none;
  background: ${({ register, theme }) =>
    register ? theme.secondaryDark : theme.primaryLight};
  color: ${({ register, theme }) =>
    register ? theme.primaryLight : theme.secondaryDark};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) =>
      theme === 'dark' ? theme.primaryLight : theme.secondaryDark};
    color: ${({ theme }) => theme.primaryLight};
  }

  ${({ register }) =>
    register &&
    `
      &:hover {
        background: #d9d9eb;
        color: #6a26cd;
      }
   
    }
  `}

  &:active {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19);
  }
`;

const StyledSvgContainer = styled.div`
  background: #333;
  padding: 0.4rem 0;
  text-align: center;
  height: 42px;
  width: 50px;
  margin: auto;
  border-radius: 5px;
  transition: all 0.2s ease-in;

  img {
    width: 24px;
    margin: 0 auto;
    display: block;
    margin: auto;
    cursor: pointer;
  }

  &:hover {
    background: rgb(51, 51, 51, 0.5);
  }
`;

export default Navbar;
