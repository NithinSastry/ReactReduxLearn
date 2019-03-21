import React from "react";
import ReactDOM from "react-dom";

const getButtonText = () => {
  return "Click the button!";
};

const App = () => {
  return (
    <div>
      <label htmlFor="name" className="label">
        Enter name:
      </label>
      <input type="text" name="name" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
