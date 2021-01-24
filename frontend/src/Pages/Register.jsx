import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  StyledButton,
  StyledInput,
  StyledHeading,
  StyledLink,
  StyledForm,
} from '../Styles/Styled';
import backgroundVideo from '../Styles/assets/charles-parker.mp4';

import { register } from '../API';
import { useAuth } from '../Providers/AuthContext';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setCurrentUser } = useAuth();

  const formData = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const data = await register(formData);
      setCurrentUser({ firstName });
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
          <video
            width='600'
            height='600'
            className='video'
            // muted autoPlay loop
          >
            <source type='video/mp4' src={backgroundVideo} />
          </video>
        </StyledVideoContainer>

        <StyledFormContainer>
          <StyledForm className='register-form' onSubmit={registerUser}>
            <StyledHeading>Sign Up</StyledHeading>
            <StyledInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              placeholder='Your name'
            />
            <StyledInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              placeholder='Your name'
            />
            <StyledInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              placeholder='Your email'
            />
            <StyledInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Create password'
            />
            <StyledInput
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type='password'
              placeholder='Confirm password'
            />
            <StyledButton auth type='submit'>
              Register
            </StyledButton>
            <StyledLink size='small'>
              Already have an account?
              <Link to='/login'> Log in</Link>
            </StyledLink>
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

  /* background: linear-gradient(
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
  ); */
`;

const StyledRegisterContainer = styled.div`
  width: 85%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  overflow: hidden;
  width: max-content;
  height: 60%;
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 100px 80px rgba(0, 0, 0, 0.07);

  & .form-title {
    margin-bottom: 1rem;
  }
`;

const StyledVideoContainer = styled.div`
  &.video-container {
    overflow: hidden;
  }

  & .video {
    width: 300px;
    height: 100%;
    object-fit: fill;
  }
`;

const StyledFormContainer = styled.div`
  padding: 2rem;
  background: #e4e2e5;
  width: 500px;

  & .register-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > input {
      width: 250px;
      padding: 5px 10px;
      margin: 5px;
      border: 1px solid transparent;
      border-radius: 5px;
      font-size: 16px;
      line-height: 1.7;
      transition: border 0.2s ease-in;

      &:focus {
        border: 1px solid $primary;
        outline: none;
      }
    }

    & .reg-btn {
      padding: 0.3rem 0;
      width: 250px;
      margin: 1rem;
      border: none;
      border-radius: 4px;
      background: $primary;
      font-weight: 500;
      color: #e4e2e5;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
        0 6px 6px rgba(0, 0, 0, 0.23);
      transition: all 0.2s ease-in;

      &:hover {
        color: $primary;
        background: #e4e2e5;
      }

      &:active {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19);
      }
    }
  }
`;

const StyledBackBtn = styled.button`
  font-weight: bold;
  position: absolute;
  top: 20px;
  left: 10%;
  transition: color 0.2s ease-in;

  &:hover {
    text-decoration: none;
    color: red;
  }
`;

export default Register;
