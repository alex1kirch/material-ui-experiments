import { ConnectedRouter as Router } from "connected-react-router";
import * as React from "react";
import { Provider } from "react-redux";
import store, { history } from "../store";
import App from "./App";
import ThemeProvider from "./ThemeProvider";

const Root = () => (
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <ThemeProvider uiTheme={{ direction: "rtl" }}>
                    <App />
                </ThemeProvider>
            </Router>
        </Provider>
    </React.StrictMode>
);

export default Root;
