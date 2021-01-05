import './index.scss';

export const Group = ({ name }) => {
  return (
    <div className='groups__card'>
      <div className='card__typography'>
        <h3 className='card__title'>Lorem ipsum dolor sit amet</h3>
        <span className='card__count'>participants count</span>
        <span className='card__date'>date created</span>
      </div>
      <div className='logo__container'>
        <img src='https://picsum.photos/100/100' alt='' />
      </div>
    </div>
  );
};
