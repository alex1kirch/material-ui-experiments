import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";
import { getDirectionByLocale } from "../utils/locale";
import ThemeProvider from "./ThemeProvider";

type Props = { children: React.ReactNode } & InjectedIntlProps;

export default injectIntl(({ children, intl }: Props) => {
    const direction = getDirectionByLocale(intl.locale);

    return <ThemeProvider uiTheme={{ direction }} children={children} />;
});
