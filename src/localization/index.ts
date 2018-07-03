import * as Intl from "intl";
import * as areIntlLocalesSupported from "intl-locales-supported";
import "intl/locale-data/jsonp/ar";
import "intl/locale-data/jsonp/en";
import { addLocaleData } from "react-intl";
import * as arLocaleData from "react-intl/locale-data/ar";
import * as enLocaleData from "react-intl/locale-data/en";
import ar from "./translations/ar";
import en from "./translations/en";

export const supportedLanguages: string[] = ["en", "ar"];
export const defaultLanguage: string = "en";

if (global.Intl) {
    if (!areIntlLocalesSupported(supportedLanguages)) {
        global.Intl.NumberFormat = Intl.NumberFormat;
        global.Intl.DateTimeFormat = Intl.DateTimeFormat;
    }
} else {
    global.Intl = Intl;
}

addLocaleData([...enLocaleData, ...arLocaleData]);
export default { en, ar };
