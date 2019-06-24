import React from 'react';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '909840463989-b3t7gmq83652gosap2b2u11jdmt2omj1.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  getAuthButton() {
    if (this.state.isSignedIn == null) {
      return null;
    } else if (this.state.isSignedIn === true) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon">Sign out</i>
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon">Sign in with google</i>
        </button>
      );
    }
  }

  render() {
    return <div>{this.getAuthButton()}</div>;
  }
}

export default GoogleAuth;
