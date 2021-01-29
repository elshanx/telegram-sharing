import { Route, Redirect } from 'react-router-dom';

import Auth from '../Helpers/Auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = Auth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
