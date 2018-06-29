import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { IStoreState } from "./types";

const rootReducer = (state: IStoreState) => state;
export const history = createBrowserHistory();
const composeEnhancers = composeWithDevTools({});
const initialState = {};

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  initialState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export default store;