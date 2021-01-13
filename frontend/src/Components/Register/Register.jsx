import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { register } from '../../API';
import { useAuth } from '../../Providers/authContext';

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
    <>
      <Link to='/'>go back</Link>
      <form onSubmit={onFormSubmit}>
        {error && <Alert variant='danger'>{error}</Alert>}
        <h2>please login</h2>

        <label>
          name
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type='text'
            placeholder='name*'
          />
        </label>

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

        <label>
          password
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            placeholder='password*'
          />
        </label>

        <label>
          confirm your password
          <input
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
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

export default Register;
