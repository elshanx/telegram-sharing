import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Group from './Group';

import { StyledHeading } from '../Styles/Styled';
import '../Styles/Sass/GroupList.scss';
import { fetchGroups } from '../API';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => (async () => setGroups(await fetchGroups()))(), []);

  const group = groups?.map((g) => <Group key={g.id} {...g} />);

  return (
    <section className='grouplist'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <StyledHeading header>
          Featured Channels, Groups, and Bots
        </StyledHeading>
      </motion.div>
      <div className='groups'>{groups && group}</div>
    </section>
  );
};

export default GroupList;
