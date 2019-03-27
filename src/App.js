import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount = () => {
    // Get User Position and update state
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude } = position.coords;
        this.setState({ lat: latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  };

  render() {
    const { lat, errorMessage } = this.state;
    if (errorMessage && !lat) {
      return (
        <div className="App">
          <h1>Error: {errorMessage}</h1>
        </div>
      );
    } else if (!errorMessage && lat) {
      return (
        <div className="App">
          <SeasonDisplay lat={lat} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Spinner />
        </div>
      );
    }
  }
}

export default App;
