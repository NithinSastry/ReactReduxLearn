import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import reducers from "./reducers";

const BlogReduxProject = () => {
  return (
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  );
};

export default BlogReduxProject;
