import React from "react";

const Loader = props => {
  return (
    <div className="ui segment" style={{ height: "100vh" }}>
      <div className="ui active dimmer">
        <div className="ui text loader">{props.loadingText}</div>
      </div>
    </div>
  );
};

Loader.defaultProps = {
  loadingText: "Loading..."
};

export default Loader;
