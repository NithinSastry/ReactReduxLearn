import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";
import SongsList from "./components/SongsList";
import SongDetail from "./components/SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongsList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

const ReduxProvider = () => {
  return (
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  );
};

export default ReduxProvider;
