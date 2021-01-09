import { useEffect, useState } from 'react';
import './index.scss';
import { fetchGroups } from '../../API';
import { Group } from '../';

export const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => (async () => setGroups(await fetchGroups()))(), []);

  const group = groups?.map(g => <Group key={g.id} {...g} />);

  return (
    <section className='grouplist'>
      <div>
        <h2 className='grouplist__title'> Featured Channels, Groups, and Bots</h2>
      </div>
      <div className='groups'>{groups && group}</div>
    </section>
  );
};
