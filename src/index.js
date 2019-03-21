import React from "react";
import ReactDOM from "react-dom";

// const getButtonText = () => {
//   return "Click the button!";
// };

const App = () => {
  const buttonTextObj = { text: "Text of a button" };
  return (
    <div>
      <label htmlFor="name" className="label">
        Enter name:
      </label>
      <input type="text" name="name" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonTextObj.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
