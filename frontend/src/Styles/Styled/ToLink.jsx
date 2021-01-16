import styled from 'styled-components';

export const ToLink = styled.p`
  color: $primary;
  width: 250px;
  max-width: 250px;
  transition: all 0.2s ease-in-out;
  text-align: center;

  font: {
    size: 13px;
    weight: 500;
  }
  & Link,
  a {
    color: inherit;
    transition: all 0.2s ease;

    &:hover {
      color: darken($primary, 10%);
      text-decoration: none;
    }
  }
`;
