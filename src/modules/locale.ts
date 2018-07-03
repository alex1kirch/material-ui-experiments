import { IntlProvider } from "react-intl";
import { APP_NAME } from "../config";
import localization, { defaultLanguage } from "../localization";

/** Constants */
export const MODULE_NAME = "LOCALE";
const PREFIX = `${APP_NAME}/${MODULE_NAME}`;
const CHANGE_LOCALE = `${PREFIX}/CHANGE_LOCALE`;

/** Action creators */
export function changeLocale(locale: string) {
    return {
        payload: { locale, ...localization[locale] },
        type: CHANGE_LOCALE,
    };
}

/** Selectors */
export const localeSelector = (state: IStoreState): State => state[MODULE_NAME];

/** Types */
type State = IntlProvider.Props;
interface IStoreState {
    [MODULE_NAME]: State;
}

/** Reducer */
const initLocale: string = (navigator && navigator.language) || defaultLanguage;
const initialState: State = {
    locale: initLocale,
    ...localization[initLocale],
};

export default (state = initialState, action: ReturnType<typeof changeLocale>) => {
    if (action.type !== CHANGE_LOCALE) {
        return state;
    }

    const { payload } = action;
    return { ...state, ...payload };
};
