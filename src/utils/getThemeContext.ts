import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jssPreset from "@material-ui/core/styles/jssPreset";

import { create, SheetsRegistry } from "jss";
import rtl from "jss-rtl";

export interface IUiTheme {
    direction: "rtl" | "ltr";
}

function getTheme(uiTheme: IUiTheme) {
    return createMuiTheme({
        direction: uiTheme.direction,
    });
}

const jss = create({ plugins: [...(jssPreset().plugins as any), rtl()] });
let themeContext: ReturnType<typeof createThemeContext>;

function createThemeContext() {
    const defaultUiTheme: IUiTheme = { direction: "ltr" };
    const muiTheme = getTheme(defaultUiTheme);

    return {
        generateClassName: createGenerateClassName({
            productionPrefix: "mui-exp",
        }),
        jss,
        muiTheme,
        sheetsManager: new Map(),
        sheetsRegistry: new SheetsRegistry(),
        uiTheme: defaultUiTheme,
    };
}

export type ThemeContext = ReturnType<typeof createThemeContext>;

export default function getThemeContext(uiTheme?: IUiTheme): ThemeContext {
    if (!themeContext) {
        themeContext = createThemeContext();
    }

    if (!uiTheme) {
        return themeContext;
    }

    const context = {
        ...themeContext,
        muiTheme: getTheme(uiTheme),
        uiTheme,
    };
    themeContext = context;

    return context;
}
