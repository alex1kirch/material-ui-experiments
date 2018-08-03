import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import HomeIcon from "@material-ui/icons/Home";
import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from "redux";
import { changeLocale } from "../../modules/locale";
import { getOtherLocale } from "../../utils/locale";
import NavBar from "./NavBar";

const styles = (theme: Theme) =>
    createStyles({
        grow: {
            flex: "1 1 auto",
        },
        home: {
            flex: "0 1 auto",
            marginLeft: 24,
        },
        root: {
            boxShadow: "none",
            transition: theme.transitions.create("width"),
        },
    });

const dispatchToProps = {
    changeLocale,
};
type Props = WithStyles<typeof styles> & InjectedIntlProps & typeof dispatchToProps & RouteComponentProps<{}>;

const decorator = compose(
    injectIntl,
    withRouter,
    withStyles(styles),
    connect(
        undefined,
        dispatchToProps,
    ),
);

// tslint:disable-next-line:no-shadowed-variable
export default decorator(({ classes, intl, changeLocale, history }: Props) => {
    const handleToggleLanguage = () => {
        const { locale } = intl;

        changeLocale(getOtherLocale(locale));
    };

    const handleChange = (event: React.MouseEvent<{}>) => {
        event.stopPropagation();
        history.push("/");
    };

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Button aria-labelledby="appbar-home" className={classes.home} onClick={handleChange}>
                    <HomeIcon />
                </Button>
                <div className={classes.grow} />
                <NavBar />
                <Tooltip
                    id="appbar-language"
                    title={<FormattedMessage id="AppBar.Language.Tooltip" defaultMessage="Toggle en/ar" />}
                    enterDelay={300}
                >
                    <IconButton
                        color="inherit"
                        onClick={handleToggleLanguage}
                        aria-labelledby="appbar-language"
                        children={getOtherLocale(intl.locale)}
                    />
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
});
