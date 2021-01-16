import styled from 'styled-components';

export const Container = styled.div`
  ${({ main }) =>
    main &&
    `
    width: 85%;
    margin: 0 auto;
  `}

  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
`;
