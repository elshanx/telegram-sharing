import { motion } from 'framer-motion';

import bgSvg from '../Styles/assets/illustrations/vector.svg';
import blob from '../Styles/assets/illustrations/blob.svg';

const Header = () => {
  return (
    <motion.div
      className='flex justify-center items-center my-12 mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className='flex-1'>
        <img src={bgSvg} alt='vector' />
      </div>
      <motion.div
        className='flex-1 font-medium'
        style={{
          backgroundImage: `url(${blob})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div className='mb-2'>
          <h1 className='sm:text-3xl md:text-5xl'>
            Telegramdaki ən
            <span className='text-yellow-500'> yaxşı </span>
            kanallarını kəşf et!
          </h1>
        </motion.div>
        <h4 className='my-6 w-2/3'>
          #1 Directory of The Best Telegram Channels, Groups, and Bots.
        </h4>
        <button
          className='btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-none text-white hover:bg-altdark hover:text-white shadow-sm font-medium py-2 px-4 rounded ring-1 ring-white md:ring-white'
          type='button'
        >
          top 100 media
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Header;
