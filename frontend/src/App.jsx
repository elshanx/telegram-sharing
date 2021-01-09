import { Route, Switch } from 'react-router-dom';

import { Home, About, Auth, Contact } from './Pages';

import { AuthProvider } from './Providers/authContext';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
        <Route exact path='/Login' component={Auth}></Route>
        <Route exact path='/Register' component={Auth}></Route>
      </Switch>
    </AuthProvider>
  );
}

export default App;
