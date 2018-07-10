import ApolloClient from "apollo-boost";
import { ConnectedRouter as Router } from "connected-react-router";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import store, { history } from "../store";
import App from "./App";
import DirectionProvider from "./DirectionProvider";
import ReduxConnectedIntlProvider from "./ReduxConnectedIntlProvider";

const client = new ApolloClient({
    uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
});

const Root = () => (
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <ReduxConnectedIntlProvider>
                    <Router history={history}>
                        <DirectionProvider>
                            <App />
                        </DirectionProvider>
                    </Router>
                </ReduxConnectedIntlProvider>
            </Provider>
        </ApolloProvider>
    </React.StrictMode>
);

export default Root;
