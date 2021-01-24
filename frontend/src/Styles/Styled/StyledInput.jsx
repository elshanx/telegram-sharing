import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 250px;
  padding: 5px 10px;
  margin: 5px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  line-height: 1.7;
  transition: all 0.2s ease-in;
  background: #cecece;

  &::placeholder {
    color: rgba(129, 125, 125, 0.582);
  }

  &:focus {
    background: #eceaea;
    outline: none;
  }
`;
