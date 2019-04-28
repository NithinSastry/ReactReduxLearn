import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

// import { selectSong } from "./actions";
import reducers from "./reducers";
import SongsList from "./components/SongsList";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongsList />
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
