import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import GroupList from '../Components/GroupList';
import Footer from '../Components/Footer';

const Home = () => (
  <div className='bg-primary text-white w-10/12 m-auto'>
    <Navbar />
    <Header />
    <GroupList />
    <Footer />
  </div>
);

export default Home;
