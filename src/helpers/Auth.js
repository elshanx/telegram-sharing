// import { useState } from 'react';
// import axios from 'axios';

// const isServer = typeof window === 'undefined';

// const Auth = () => {
//   const url = 'http://localhost:3000';

//   if (!isServer) {
//     const isLoggedIn = localStorage.getItem('token') ? true : false;
//   }

//   const [authenticated, setAuthenticated] = useState(false);

//   const setToken = (token) => localStorage.setItem('token', token);

//   const deleteToken = () => localStorage.removeItem('token');

//   const login = async (body) => {
//     try {
//       const {
//         data: { token },
//       } = await axios.post('/api/login', body);
//       console.log({ token });
//       setToken(data.token);
//       setAuthenticated(true);
//       return token;
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const register = async ({
//     name,
//     lastname,
//     email,
//     password,
//     password2,
//   }) => {
//     try {
//       const { data } = await axios.post(`${url}/api/users/register`, {
//         name,
//         lastname,
//         email,
//         password,
//         password2,
//       });
//       setToken(data.token);
//       setAuthenticated(true);
//       return data;
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const logout = () => {
//     if (isLoggedIn) {
//       deleteToken();
//       setAuthenticated(false);
//     }
//   };

//   return {
//     login,
//     register,
//     logout,
//     authenticated,
//   };
// };

// export default Auth;
