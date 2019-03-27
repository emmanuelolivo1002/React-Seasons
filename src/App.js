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

  renderContent() {
    const { lat, errorMessage } = this.state;

    if (errorMessage && !lat) {
      return <h1>Error: {errorMessage}</h1>;
    } else if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  }
  render() {
    return <div className="App">{this.renderContent()}</div>;
  }
}

export default App;
