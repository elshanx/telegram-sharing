import axios from 'axios';

const endpoint = 'http://localhost:3000';

export const fetchGroups = async () => {
  try {
    const { data } = await axios.get(endpoint);
    return data;
  } catch (err) {
    console.error(err);
  }
};
