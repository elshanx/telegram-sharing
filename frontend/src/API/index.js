import axios from 'axios';

const endpoint = 'http://localhost:3000';
const authURL = 'http://localhost:3000/api/users/';

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
    console.error(err);
  }
};

export const logIn = async () => {
  console.log('logged in');
};

export const register = async (name, email, password, password2) => {
  await axios({
    method: 'post',
    url: `${authURL}/register`,
    data: {
      name,
      email,
      password,
      password2,
    },
  })
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
