import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorPage from './Pages/404';

import AuthProvider from './Providers/AuthContext';
import DarkModeProvider from './Providers/DarkModeProvider';
import { useTheme } from './Providers/DarkModeProvider';
import Dashboard from './Components/Dashboard';

const App = () => {
  const mode = useTheme();

  return (
    <DarkModeProvider>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='*' component={ErrorPage} />
        </Switch>
      </AuthProvider>
    </DarkModeProvider>
  );
};

export default App;
