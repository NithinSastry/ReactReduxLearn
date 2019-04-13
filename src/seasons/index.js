import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ""
    };
  }

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

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    if (this.state.errorMessage === "" && this.state.lat) {
      return <div>Latitude : {this.state.lat}</div>;
    }

    return <div>Loading</div>;
  }
}

export default App;
