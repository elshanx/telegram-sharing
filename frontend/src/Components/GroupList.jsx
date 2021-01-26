import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Group from './Group';

import '../Styles/Sass/GroupList.scss';
import { fetchGroups } from '../API';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => (async () => setGroups(await fetchGroups()))(), []);

  const group = groups?.map((g) => <Group key={g.id} {...g} />);

  return (
    <section className='grouplist'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className='text-5xl text-center my-4 font-medium text-transparent bg-gradient-to-r from-pink-500 via-purple-800 to-red-200 bg-clip-text'>
          Featured Channels, Groups, and Bots
        </h2>
      </motion.div>
      <div className='groups'>{groups && group}</div>
    </section>
  );
};

export default GroupList;
