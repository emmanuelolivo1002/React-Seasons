import React, { useState, useEffect } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  // Initialize the state
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Get User Position and update state
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude } = position.coords;
        setLat(latitude);
      },
      err => {
        setErrorMessage(err.message);
      }
    );
  }, []);

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
