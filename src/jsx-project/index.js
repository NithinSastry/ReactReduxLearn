import React from "react";

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

export default App;