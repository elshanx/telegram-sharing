import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  StyledButton,
  StyledInput,
  StyledHeading,
  StyledForm,
  StyledLink as StyledToLogin,
} from '../Styles/Styled';
import backgroundVideo from '../Styles/assets/charles-parker.mp4';

import { register } from '../API';
import { useAuth } from '../Providers/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });
  const { setCurrentUser } = useAuth();

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const data = await register(formData);
      // setCurrentUser({ firstName });
      console.log(data);
    } catch (error) {
      console.log(error);
      // TODO: display error
    }
  };

  return (
    <StyledSection>
      <StyledRegisterContainer>
        <StyledLink>
          <Link to='/'>Home</Link>
        </StyledLink>

        <StyledVideoContainer>
          <video muted autoPlay loop>
            <source type='video/mp4' src={backgroundVideo} />
          </video>
        </StyledVideoContainer>

        <StyledFormContainer>
          <StyledForm onSubmit={registerUser}>
            <StyledHeading>Sign Up</StyledHeading>
            <StyledInput
              name='firstName'
              onChange={onInputChange}
              value={formData.firstName}
              type='text'
              placeholder='First name'
            />
            <StyledInput
              name='lastName'
              onChange={onInputChange}
              value={formData.lastName}
              type='text'
              placeholder='Last name'
            />
            <StyledInput
              name='email'
              onChange={onInputChange}
              value={formData.email}
              type='text'
              placeholder='Your email'
            />
            <StyledInput
              name='password'
              onChange={onInputChange}
              value={formData.password}
              type='password'
              placeholder='Create password'
            />
            <StyledInput
              name='password2'
              onChange={onInputChange}
              value={formData.password2}
              type='password'
              placeholder='Confirm password'
            />
            <StyledButton auth type='submit'>
              Register
            </StyledButton>
            <StyledToLogin size='small'>
              Already have an account? <Link to='/login'>Log in</Link>
            </StyledToLogin>
          </StyledForm>
        </StyledFormContainer>
      </StyledRegisterContainer>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    -45deg,
    #3f51b1 0%,
    #5a55ae 13%,
    #7b5fac 25%,
    #8f6aae 38%,
    #a86aa4 50%,
    #cc6b8e 62%,
    #f18271 75%,
    #f3a469 87%,
    #f7c987 100%
  );
`;

const StyledRegisterContainer = styled.div`
  border: none;
  outline: none;
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  width: max-content;
  height: 60%;
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 100px 80px rgba(0, 0, 0, 0.07);
`;

const StyledVideoContainer = styled.div`
  height: 600px;

  video {
    height: 100%;
    width: 300px;
    object-fit: fill;
  }
`;

const StyledFormContainer = styled.div`
  padding: 2rem;
  background: rgb(40, 43, 44);
  width: 500px;
  height: 600px;
`;

const StyledLink = styled.p`
  color: ${({ theme }) => theme.primaryLight};
  font-weight: 500;
  font-size: ${({ size }) => (size === 'small' ? '0.6rem' : '1rem')};
  opacity: ${({ size }) => (size === 'small' ? 0.6 : 1)};

  position: absolute;
  top: 2rem;
  width: 85%;

  & a {
    background: rgba(51, 51, 51, 0.397);
    padding: 0.5rem;
    border-radius: 3px;

    &:hover {
      background: rgba(51, 51, 51, 0.137);
    }
  }
`;

export default Register;
