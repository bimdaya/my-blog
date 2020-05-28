import React from 'react';

const ErrorPage = ({ statusCode }) => {
  if (statusCode === 404) {
    return <h1>Page Not Found</h1>;
  }

  if (statusCode >= 500 && statusCode < 600) {
    return <h1>Sorry something went wrong... We will be right back !</h1>;
  }

  return <h1>Sorry something went wrong...</h1>;
};

export default ErrorPage;
