import { combineReducers } from "redux";
import localeReducer, { MODULE_NAME as LOCALE } from "../modules/locale";

export default combineReducers({
    [LOCALE]: localeReducer,
});
