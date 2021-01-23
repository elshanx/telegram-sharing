import axios from 'axios';

// import { useAuth } from '../Providers/AuthContext';

const endpoint = 'http://localhost:3000';
const authURL = 'http://localhost:3000/api/users';

// const { currentUser: token } = useAuth();
// let token;
// const authAxios = axios.create({
//   baseURL: authURL,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   },
// });

export const fetchGroups = async () => {
  try {
    const { data } = await axios.get(endpoint);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export const logIn = async (email, password) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: `${authURL}/login`,
      data: {
        email,
        password,
      },
    });
    return data.success;
    // set token here
  } catch (error) {
    console.error(error);
    // set error here
  }
};

export const register = async (
  firstName,
  lastName,
  email,
  password,
  password2,
) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: `${authURL}/register`,
      data: {
        firstName,
        lastName,
        email,
        password,
        password2,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
