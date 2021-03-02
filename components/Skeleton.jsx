import MUISkeleton from '@material-ui/lab/Skeleton';

const Skeleton = ({ side }) => {
  if (side) {
    return [...Array(3)].map((_) => (
      <MUISkeleton animation='wave' width={300} height={260} />
    ));
  }
  return [...Array(3)].map((_) => (
    <>
      <MUISkeleton animation='wave' width={300} height={260} />
      <MUISkeleton animation='wave' width={300} height={260} />
      <MUISkeleton animation='wave' width={300} height={260} />
    </>
  ));
};

export default Skeleton;
