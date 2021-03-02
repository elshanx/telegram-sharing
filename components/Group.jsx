import { card, cardContainer, flex } from 'styles/group.module.scss';

import Skeleton from 'components/Skeleton';

const Group = ({ data }) => {
  if (!data)
    return (
      <div className={flex}>
        <Skeleton />
      </div>
    );

  return (
    <div className={cardContainer}>
      <div className={card}></div>
      <div className={card}></div>
      <div className={card}></div>
      <div className={card}></div>
      <div className={card}></div>
      <div className={card}></div>
      <div className={card}></div>
      <div className={card}></div>
      <div className={card}></div>
    </div>
  );
};

export default Group;
