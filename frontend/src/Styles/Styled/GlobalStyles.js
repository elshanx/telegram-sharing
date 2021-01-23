import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) =>
      theme.mode === 'dark' ? theme.primaryDark : theme.primaryLight};
    color: ${({ theme }) =>
      theme.mode === 'dark' ? theme.primaryLight : theme.primaryDark};
    box-sizing: border-box;
    font-family: 'Montserrat', "Roboto", sans-serif;
  };

  ul, a {
    color: ${({ theme }) =>
      theme.mode === 'dark' ? theme.primaryLight : theme.primaryDark};
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  input {
    font-family: inherit;
  }

  & a,
  Link,
  link {
    color: inherit;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) =>
        theme === 'dark' ? theme.primaryLight : theme.secondaryDark};
    }
  }
`;

export default GlobalStyles;
