import * as React from "react";
import { Provider } from "react-redux";
import store from "../createStore";
import App from "./App";

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
