import errorImg from '../Styles/assets/fatal-error.png';

const ErrorPage = () => {
  return (
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <img src={errorImg} alt={errorImg} />
    </div>
  );
};

export default ErrorPage;
