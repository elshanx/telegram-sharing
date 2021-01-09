// import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { useAuth } from '../Providers/authContext';

import { db, auth, storage } from '../firebase';
console.table(db,auth,storage)

export const Auth = () => {
  const { register, currentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onFormSubmit = async e => {
    e.preventDefault();
    // validate fn
    // handle errors
    try {
      setError('');
      await register(email, password);
    } catch {
      setError('something went wrong');
    }
  };

  // TODO: delete ln {currentUser?.email}

  return (
    <>
      <Link to='/'>go back</Link>
      <form onSubmit={onFormSubmit}>
        {error && <Alert variant='danger'>{error}</Alert>}
        {currentUser?.email}
        <h2>please login</h2>
        <label>
          email
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='text'
            placeholder='email*'
          />
        </label>
        <br />
        <label htmlFor=''>
          password
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            placeholder='password*'
          />
        </label>
        <br />
        <button type='submit'>login</button>
      </form>
    </>
  );
};
