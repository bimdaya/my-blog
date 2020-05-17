import ErrorPage from '../src/ErrorPage';

const Error = ({ statusCode }) => {
  return <ErrorPage statusCode={statusCode} />;
};

export default Error;
