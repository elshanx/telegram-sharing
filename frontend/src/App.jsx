import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Auth from './Pages/Auth';
import Register from './Components/Register/Register';
import { AuthProvider } from './Providers/authContext';

const App = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Auth} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </AuthProvider>
  );
};

export default App;
