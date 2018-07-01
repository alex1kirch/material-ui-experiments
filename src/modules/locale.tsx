import { IntlProvider } from "react-intl";
import { APP_NAME } from "../config";
import arMessages from "../messages/ar";
import { Locales } from "../utils/locale";

/** Constants */
export const MODULE_NAME = "LOCALE";
const PREFIX = `${APP_NAME}/${MODULE_NAME}`;
const LOCALE_SELECTED = `${PREFIX}/LOCALE_SELECTED`;

/** Action creators */
export function selectLocale(locale: string) {
    return {
        payload: locale,
        type: LOCALE_SELECTED,
    };
}

/** Selectors */
export const localeSelector = (state: IStoreState) => state[MODULE_NAME];

/** Types */
type State = IntlProvider.Props;
interface IStoreState {
    [MODULE_NAME]: State;
}

/** Reducer */
const locales: { [locale: string]: State } = {
    [Locales.en]: { locale: Locales.en, messages: {} },
    [Locales.ar]: { locale: Locales.ar, messages: arMessages },
};

const initialState: State = locales[Locales.en];
export default (state = initialState, action: ReturnType<typeof selectLocale>) => {
    if (action.type !== LOCALE_SELECTED) {
        return state;
    }

    return locales[action.payload] || state;
};
