import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);
const url = 'http://localhost:3000';

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ token: '' });

  const login = async (email, password) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: `${url}/api/users/login`,
        data: { email, password },
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const register = async ({
    name,
    lastname,
    email,
    password,
    password2,
  }) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: `${url}/api/users/register`,
        data: { name, lastname, email, password, password2 },
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const signout = () => {
    if (user) {
      localStorage.removeItem('token');
      setUser(false);
    }
  };

  const value = { user, setUser, login, register, signout };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
