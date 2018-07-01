import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import * as React from "react";
import { Helmet } from "react-helmet";
import JssProvider from "react-jss/lib/JssProvider";
import getThemeContext, { IUiTheme, ThemeContext } from "../utils/getThemeContext";

interface IProps {
    uiTheme: IUiTheme;
}
interface IState {
    themeContext: ThemeContext;
}
class ThemeProvider extends React.Component<IProps, IState> {
    public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
        if (nextProps.uiTheme !== prevState.themeContext.uiTheme) {
            return { themeContext: getThemeContext(nextProps.uiTheme) };
        }

        return prevState;
    }

    public state: IState = { themeContext: getThemeContext(this.props.uiTheme) };

    public render() {
        const { children } = this.props;
        const { themeContext } = this.state;

        return (
            <JssProvider
                jss={themeContext.jss}
                registry={themeContext.sheetsRegistry}
                generateClassName={themeContext.generateClassName}
            >
                <MuiThemeProvider
                    theme={themeContext.muiTheme}
                    sheetsManager={themeContext.sheetsManager}
                >
                    <Helmet>
                        <body dir={themeContext.uiTheme.direction} />
                    </Helmet>
                    <CssBaseline />
                    {children}
                </MuiThemeProvider>
            </JssProvider>
        );
    }
}

export default ThemeProvider;
