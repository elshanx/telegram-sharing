import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);
const url = 'http://localhost:3000';

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem('token') || '';

  const [user, setUser] = useState({ token });

  // useEffect(() => console.log(token), []);

  const setToken = (token) => localStorage.setItem('token', token);

  const deleteToken = () => localStorage.removeItem('token');

  const login = async (email, password) => {
    try {
      const { data } = await axios.post(`${url}/api/users/login`, {
        email,
        password,
      });
      setToken(data.token);
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
      const { data } = await axios.post(`${url}/api/users/register`, {
        name,
        lastname,
        email,
        password,
        password2,
      });
      setToken(data.token);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const signout = () => {
    if (user) {
      deleteToken();
      setUser(false);
    }
  };

  const isLoggedIn = () => (user.token ? true : false);

  const value = { user, setUser, login, register, signout, isLoggedIn };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
