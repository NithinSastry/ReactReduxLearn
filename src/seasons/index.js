import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        this.setState({
          lat: latitude
        });
      },
      error => {
        this.setState({
          errorMessage: error.message
        });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    if (this.state.errorMessage === "" && this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat} />;
    }

    return <Loader loadingText="Please accept location request" />;
  }

  render() {
    return <div className="season-content">{this.renderContent()}</div>;
  }
}

export default App;
