import axios from 'axios';

const endpoint = 'http://localhost:3000';

export const fetchGroups = async () => {
  const { data } = await axios.get(endpoint);
  return data;
};
