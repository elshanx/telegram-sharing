import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';

// import Dashboard from '../components/Dashboard';
// import AuthProvider from './providers/AuthContext';
// import DarkModeProvider from './providers/DarkModeProvider';

const App = () => {
  return (
    // <DarkModeProvider>
    // <AuthProvider>
    <>
      <Home />
      <About />
      <Contact />
      <Login />
      <Register />
      {/* <Dashboard /> */}
    </>
    // </AuthProvider>
    // </DarkModeProvider>
  );
};

export default App;
