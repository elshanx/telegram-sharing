import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { register } from '../../API';
import { useAuth } from '../../Providers/authContext';
import './index.scss';
import backgroundVideo from './charles-parker.mp4';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { setCurrentUser } = useAuth();

  const onFormSubmit = async e => {
    e.preventDefault();
    await register(name, email, password, confirmPassword);
    // validate fn
    setCurrentUser({ name });

    // handle errors
  };

  return (
    <section className='register'>
      <Link className='back-btn' to='/'>
        Home
      </Link>
      <div className='register-container'>
        <div className='video-container'>
          <video
            className='video'
            muted
            // autoPlay
            loop
          >
            <source type='video/mp4' src={backgroundVideo} />
          </video>
        </div>

        <div className='form-container'>
          <form className='register-form' onSubmit={onFormSubmit}>
            {error && <Alert variant='danger'>{error}</Alert>}
            <h2 className='form-title'>Sign Up</h2>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type='text'
              placeholder='Your name'
            />
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
            <input
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              type='password'
              placeholder='Confirm password'
            />
            <button className='reg-btn' type='submit'>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
