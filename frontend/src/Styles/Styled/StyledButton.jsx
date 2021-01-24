import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #cecece;
  color: ${({ theme }) => theme.secondaryDark};
  padding: 0.5rem 0;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  font-weight: 500;
  outline: none;
  font-size: inherit;
  font-family: inherit;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    background: ${({ theme }) => theme.secondaryDark};
    color: ${({ theme }) => theme.primaryLight};
  }

  ${({ auth }) =>
    auth &&
    `
    width: 250px;
    margin: 1rem;
    background: $primary;
    font-weight: 500;
    background: ${({ theme }) => theme.secondaryLight};
  `}

  ${({ header }) =>
    header &&
    `
    padding: 0.7rem;
  `}

  &:active {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19);
  }
`;
