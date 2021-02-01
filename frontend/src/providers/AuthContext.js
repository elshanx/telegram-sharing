import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem('token') || undefined;

  const [user] = useState({ user: null });
  // TODO: fix this

  return (
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
