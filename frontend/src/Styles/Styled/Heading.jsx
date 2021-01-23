import styled from 'styled-components';

export const Heading = styled.h2`
  text-shadow: 2px 2px ${({ theme }) => theme.secondaryDark};
  color: ${({ theme }) => theme.primaryLight};
  padding: 1rem;

  ${({ header }) =>
    header &&
    `
    font-size: 2rem;
    text-align: center;
  `};
`;
