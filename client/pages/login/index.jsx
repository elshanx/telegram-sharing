import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import LoginComponent from '../../components/Login.Component';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url('/assets/loginBgImage.jpeg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    // <Grid container component='main' className={classes.root}>
    //   <Grid item xs={false} sm={4} md={7} className={classes.image} />
    //   <Grid item xs={12} sm={8} md={5}>
    <LoginComponent />
    // </Grid>
    // </Grid>
  );
};

export default Login;
