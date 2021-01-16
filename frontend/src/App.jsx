import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Register from './Components/Register';
import Login from './Components/Login';
import { AuthProvider } from './Providers/authContext';

const App = () => (
  <AuthProvider>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </AuthProvider>
);

export default App;
