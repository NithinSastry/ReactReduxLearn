import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        this.setState({
          lat: latitude
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

export default App;
