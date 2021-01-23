import styled from 'styled-components';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import GroupList from '../Components/GroupList';
import Footer from '../Components/Footer';

const Home = () => (
  <Container>
    <Navbar />
    <Header />
    <GroupList />
    <Footer />
  </Container>
);

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

export default Home;
