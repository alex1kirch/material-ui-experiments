import { ConnectedRouter as Router } from "connected-react-router";
import * as React from "react";
import { Provider } from "react-redux";
import store, { history } from "../store";
import App from "./App";

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

export default Root;
