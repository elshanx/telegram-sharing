import styled from 'styled-components';

const Dropdown = ({ title }) => {
  return <StyledDropdown>{title}</StyledDropdown>;
};

const StyledDropdown = styled.div`
  padding: 0.5rem;

  padding: 0.5rem;
  background: #333;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background: rgb(51, 51, 51, 0.5);

    color: ${({ theme }) =>
      theme === 'dark' ? theme.secondaryDark : theme.secondaryDark};
  }
`;

export default Dropdown;
