import axios from 'axios';

export const url = 'http://localhost:3000';

export const fetchGroups = async () => {
  try {
    const { data: groups } = await axios.get(url);
    return groups;
  } catch (err) {
    console.error(err);
  }
};
