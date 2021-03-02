import { grid, heading, side, tag } from 'styles/groupList.module.scss';

import Group from 'components/Group';
import Skeleton from 'components/Skeleton';
import { useState } from 'react';

const GroupList = () => {
  const [data] = useState({
    key1: 'value',
  });

  return (
    <main className={grid}>
      <div>
        <div className={tag}>
          <h3>Featured groups & channels</h3>
        </div>
        <div>
          {data &&
            Object.entries(data)?.map((g) => <Group key={g.id} {...g} />)}
        </div>
      </div>
      <div>
        <h2 className={heading}>right side stuff..</h2>
        <div className={side}>
          <Skeleton side />
        </div>
      </div>
    </main>
  );
};

export default GroupList;
