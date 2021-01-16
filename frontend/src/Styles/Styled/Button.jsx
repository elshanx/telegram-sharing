import styled from 'styled-components';

export const Button = styled.button`
  ${({ header }) =>
    header &&
    `
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.2s ease-in;

  &:hover {
    background: rgb(111, 72, 240);
    color: white;
  }
  `}

  ${({ register }) =>
    register &&
    `
    padding: 0.3rem 0;
    width: 250px;
    margin: 1rem;
    border: none;
    border-radius: 4px;
    background: $primary;
    font-weight: 500;
    color: #e4e2e5;
  `}



  &:active {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19);
  }
`;
