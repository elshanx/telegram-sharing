import { useState } from 'react';
import { Link } from 'react-router-dom';

import { login } from '../../API';
import { useAuth } from '../../Providers/authContext';
import './index.scss';
import backgroundVideo from '../Register/charles-parker.mp4';
import { userSchema } from '../Validations/UserValidation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setCurrentUser } = useAuth();

  const signIn = e => {
    // stuff
  };

  return (
    <section className='register'>
      <Link className='back-btn' to='/'>
        Home
      </Link>
      <div className='register-container'>
        <div className='video-container'>
          <video className='video' muted autoPlay loop>
            <source type='video/mp4' src={backgroundVideo} />
          </video>
        </div>

        <div className='form-container'>
          <form onSubmit={signIn} className='register-form'>
            <h2 className='form-title'>Sign Up</h2>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='text'
              placeholder='Your email'
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
              placeholder='Create password'
            />
            {/* <p>
              <label htmlFor='remember-password'>stay signed in?</label>
              <input type='checkbox' name='stay-signed' id='stay-signed' />
              TODO: ??
            </p> */}
            <button className='reg-btn' type='submit'>
              Log in
            </button>
            <p className='to-register'>
              Don't have an account? <Link to='/register'>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
