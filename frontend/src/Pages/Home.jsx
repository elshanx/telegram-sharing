import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import GroupList from '../Components/GroupList';
import Footer from '../Components/Footer';

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
