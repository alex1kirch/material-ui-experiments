import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import JssProvider from "react-jss/lib/JssProvider";
import getThemeContext, { IUiTheme, ThemeContext } from "../utils/getThemeContext";

function uiThemeSideEffect(uiTheme: IUiTheme) {
    document.body.dir = uiTheme.direction;
}

interface IProps {
    uiTheme: IUiTheme;
}
interface IState {
    themeContext: ThemeContext;
}
class AppWrapper extends React.Component<IProps, IState> {
    public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
        if (nextProps.uiTheme !== prevState.themeContext.uiTheme) {
            return { themeContext: getThemeContext(nextProps.uiTheme) };
        }

        return prevState;
    }

    public state: IState = { themeContext: getThemeContext(this.props.uiTheme) };

    public componentDidMount() {
        uiThemeSideEffect(this.props.uiTheme);
    }

    public componentDidUpdate() {
        uiThemeSideEffect(this.props.uiTheme);
    }

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
                    <CssBaseline />
                    {children}
                </MuiThemeProvider>
            </JssProvider>
        );
    }
}

export default AppWrapper;
