import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #cecece;
  color: #eee;
  padding: 0.5rem 0;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  outline: none;
  font-weight: 500;
  font-size: inherit;
  font-family: inherit;
  box-shadow: 0 1px rgba(0, 0, 0, 0.19);

  &:hover {
    background: white;
    color: white;
  }

  ${({ auth }) =>
    auth &&
    `
    width: 250px;
    margin: 1rem;
    background: $primary;
    font-weight: 500;
    background: white;
  `}

  ${({ header }) =>
    header &&
    `
    padding: 0.7rem;
  `}

  &:active {
    box-shadow: 0 1px rgba(0, 0, 0, 0.19);
  }
`;
