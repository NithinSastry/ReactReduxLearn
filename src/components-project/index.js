import React from "react";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
            <a href="/" className="author">
                {faker.name.firstName()}
            </a>
            <div className="metadata">
                <span className="date">
                    Today at 9:00PM
                </span>
            </div>
            <div className="text">
                Nice blog post
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
