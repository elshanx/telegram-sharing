import styled from 'styled-components';

export const StyledLink = styled.p`
  color: ${({ theme }) => theme.primaryLight};
  font-weight: 500;
  font-size: ${({ size }) => (size === 'small' ? '0.6rem' : '1rem')};
  opacity: ${({ size }) => (size === 'small' ? 0.6 : 1)};
`;
