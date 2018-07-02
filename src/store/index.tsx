import { connectRouter, routerMiddleware } from "connected-react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { StoreState } from "../types";
import reducer from "./reducer";

export const history = createBrowserHistory();
const composeEnhancers = composeWithDevTools({});
const initialState: Partial<StoreState> = {};

const store = createStore(
    connectRouter(history)(reducer), // new root reducer with router state
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history))),
);

// For hot reloading reducer
if (module.hot) {
    // Enable Webpack hot module replacement for reducer
    module.hot.accept("./reducer", () => {
        const nextReducer = require("./reducer").default;
        store.replaceReducer(nextReducer);
    });
}

export default store;
