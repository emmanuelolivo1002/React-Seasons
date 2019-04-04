import React from "react";

// Hook Logic
import useLocation from "./useLocation";

// Components
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <h1>Error: {errorMessage}</h1>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div>{content}</div>;
};

export default App;
