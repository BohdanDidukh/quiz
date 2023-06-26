import React, { FC } from "react";
import { useRouteError } from "react-router-dom";

interface ErrorPageProps { }
type Error = {
  error: {
    statusText?: string;
    message?: string;
  };
};


const ErrorPage: FC<ErrorPageProps> = () => {
  const error: Error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as Error)?.error?.statusText ||
            (error as Error)?.error?.message}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;