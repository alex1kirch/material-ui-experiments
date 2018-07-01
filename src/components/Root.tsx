import { ConnectedRouter as Router } from "connected-react-router";
import * as React from "react";
import { addLocaleData } from "react-intl";
import * as ar from "react-intl/locale-data/ar";
import * as en from "react-intl/locale-data/en";
import { Provider } from "react-redux";
import store, { history } from "../store";
import App from "./App";
import DirectionProvider from "./DirectionProvider";
import ReduxConnectedIntlProvider from "./ReduxConnectedIntlProvider";

addLocaleData([...en, ...ar]);

const Root = () => (
    <React.StrictMode>
        <Provider store={store}>
            <ReduxConnectedIntlProvider>
                <Router history={history}>
                    <DirectionProvider>
                        <App />
                    </DirectionProvider>
                </Router>
            </ReduxConnectedIntlProvider>
        </Provider>
    </React.StrictMode>
);

export default Root;
