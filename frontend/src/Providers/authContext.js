import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const register = (email, pw) => auth.createUserWithEmailAndPassword(email, pw);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => setCurrentUser(user));
    return unsub;
  }, []);

  const value = { currentUser, register };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
