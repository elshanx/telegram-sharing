import MUISkeleton from '@material-ui/lab/Skeleton';
import { flex } from 'styles/Group.module.scss';
import { nanoid } from 'nanoid';

const Skeleton = ({ n }) => {
  return [...Array(n)].map((_) => (
    <div className={flex} key={nanoid()}>
      <MUISkeleton width={250} height={260} />
      <MUISkeleton width={250} height={260} />
      <MUISkeleton width={250} height={260} />
    </div>
  ));
};

export default Skeleton;
