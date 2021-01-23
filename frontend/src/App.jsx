import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorPage from './Pages/404';

import GlobalStyles from './Styles/Styled/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import AuthProvider from './Providers/AuthContext';
import DarkModeProvider from './Providers/DarkModeProvider';
import { useTheme } from './Providers/DarkModeProvider';

const App = () => {
  const mode = useTheme();

  const theme = {
    mode,
    primaryDark: '#1f1d1f',
    primaryLight: '#d9d9eb',
    secondaryDark: '#6a26cd',
    secondaryLight: '#37b9f1',
  };

  useEffect(() => {
    // console.log(mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <DarkModeProvider>
        <AuthProvider>
          <GlobalStyles />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='*' component={ErrorPage} />
          </Switch>
        </AuthProvider>
      </DarkModeProvider>
    </ThemeProvider>
  );
};

export default App;
