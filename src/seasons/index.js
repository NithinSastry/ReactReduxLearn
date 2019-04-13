import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ""
    };

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
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

export default App;
