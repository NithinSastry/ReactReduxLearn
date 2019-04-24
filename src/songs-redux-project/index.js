import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { selectSong } from "./actions";
import reducers from "./reducers";

const App = () => {
  return <div>React redux app</div>;
};

const ReduxProvider = () => {
  return (
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  );
};

export default ReduxProvider;
