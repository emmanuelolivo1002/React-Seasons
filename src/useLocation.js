import { useState, useEffect } from "react";

export default () => {
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

  return [lat, errorMessage];
};
