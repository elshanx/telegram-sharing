import Navbar from '../components/Navbar';
import Header from '../components/Header';
import GroupList from '../components/GroupList';
import Footer from '../components/Footer';

const Home = () => (
  <div className='w-full dark:bg-primary bg-gray-400 dark:text-light'>
    <div className='container m-auto'>
      <Navbar />
      <Header />
      <GroupList />
      <Footer />
    </div>
  </div>
);

export default Home;
