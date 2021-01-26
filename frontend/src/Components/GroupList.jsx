import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Group from './Group';

import { fetchGroups } from '../API';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => (async () => setGroups(await fetchGroups()))(), []);

  return (
    <section>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className='text-5xl text-center my-16 font-medium text-transparent bg-gradient-to-r from-pink-500 via-purple-800 to-red-200 bg-clip-text'>
          Featured Channels, Groups, and Bots
        </h2>
      </motion.div>
      <div className='container flex flex-wrap justify-around'>
        {groups?.map((g) => (
          <Group key={g.id} {...g} />
        ))}
      </div>
    </section>
  );
};

export default GroupList;
