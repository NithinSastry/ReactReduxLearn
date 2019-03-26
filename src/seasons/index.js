import React from "react";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        console.log(error);
      }
    );
    return <div>Hi there!</div>;
  }
}

export default App;