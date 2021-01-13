import axios from 'axios';

const endpoint = 'http://localhost:3000';
// const loginEndpoint = 'http://localhost:3000/api/users/login';
const registerEndpoint = 'http://localhost:3000/api/users/register';

// const defaults = axios.create({
//   baseURL: 'http://localhost:3000',
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
    console.error(err);
  }
};

export const logIn = a => {
  console.log('logged');
};

export const register = async (name, email, password, password2) => {
  await axios({
    method: 'post',
    url: registerEndpoint,
    data: {
      name,
      email,
      password,
      password2,
    },
  })
    .then(response => {
      console.log(JSON.stringify(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};
