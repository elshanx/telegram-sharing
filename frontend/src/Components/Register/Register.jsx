import { useState } from 'react';
import { Link } from 'react-router-dom';

import { register } from '../../API';
import { useAuth } from '../../Providers/authContext';
import './index.scss';
import backgroundVideo from './charles-parker.mp4';
import { userSchema } from '../Validations/UserValidation';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { setCurrentUser } = useAuth();

  const formData = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  };

  const validateForm = async () => await userSchema.isValid(formData);

  const registerUser = async e => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      await register(formData);
      setCurrentUser({ firstName });
      setError('');
    } else {
      setError('...');
      // TODO: display error
    }
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
          <form className='register-form' onSubmit={registerUser}>
            <h2 className='form-title'>Sign Up</h2>
            <input
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              type='text'
              placeholder='Your name'
            />
            <input
              value={lastName}
              onChange={e => setLastName(e.target.value)}
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
            <p className='to-login'>
              Already have an account? <Link to='/login'>Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
