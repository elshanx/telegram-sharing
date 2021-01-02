import './index.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='vector-container'>
        <img src='/assets/vector.svg' alt='' />
      </div>
      <div className='TBD'>
        <h1>
          Discover The <span>Best</span> Telegram Channels
        </h1>
        <h4>#1 Directory of The Best Telegram Channels, Groups, and Bots.</h4>
        <div className='btn-container'>
          <button>top 100 media</button>
        </div>
      </div>
    </header>
  );
};
