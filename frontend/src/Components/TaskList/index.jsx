// import { Task } from '../';
import './index.scss';

export const TaskList = () => {
  return (
    <section className='groups-section'>
      {/* <div> */}
      {/* <h2 className='groups-title'> Featured Channels, Groups, and Bots</h2> */}
      {/* </div> */}
      <div className='card'>
        <div className='card-typography'>
          <h5 className='card-title'>group name</h5>
          <h6 className='card-count'>count</h6>
        </div>
        <div className=''>
          <div className='avatar-container'>
            <div className='avatar'>
              <img
                src='https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/PNG-128.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
