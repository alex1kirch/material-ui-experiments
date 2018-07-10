export * from "./graphql";
import reducer from "../store/reducer";

export type StoreState = ReturnType<typeof reducer>;
