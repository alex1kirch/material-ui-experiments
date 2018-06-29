import { createStore } from "redux";
import { IStoreState } from "./types";

const rootReducer = (state: IStoreState) => state;
const store = createStore(rootReducer);
export default store;
