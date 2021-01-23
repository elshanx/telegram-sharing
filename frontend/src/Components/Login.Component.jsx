import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {
  Input,
  Button,
  StyledLink,
  Form,
  Heading,
} from '../Styles/Styled';
import bgImage from '../Styles/assets/signin.png';

import { logIn } from '../API';
import { useAuth } from '../Providers/AuthContext';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser: token, error } = useAuth();

  const history = useHistory();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const success = await logIn(email, password);
      console.log(success);
      success && history.push('/currentUser/:id');
    } catch (error) {
      // set error(error)
    }
  };

  return (
    <Wrapper>
      <StyledLink>
        <Link to='/'>Home</Link>
      </StyledLink>
      <Form onSubmit={signIn}>
        <Heading>Log in</Heading>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          aria-label='email input'
          placeholder='Your email*'
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          aria-label='password input'
          placeholder='Your password*'
        />
        <Button auth color='signin' type='submit'>
          Log in
          {/* TODO: on click change text and animate */}
        </Button>
        <StyledLink size='small'>
          Don't have an account? <Link to='/register'>Sign up</Link>
        </StyledLink>
      </Form>
      <img src={bgImage} alt='' />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: ${({ theme }) => theme.secondaryLight};
  overflow: hidden;
  padding: 2rem;
  min-height: 100vh;
  max-height: 100vh;

  img {
    @media (max-width: 959px) {
      display: block;
    }
  }
`;

export default LoginComponent;
