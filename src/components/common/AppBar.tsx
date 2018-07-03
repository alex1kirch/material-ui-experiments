import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { defineMessages, FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";
import { connect } from "react-redux";
import { compose } from "redux";
import { changeLocale } from "../../modules/locale";
import { getOtherLocale } from "../../utils/locale";
import NavBar from "./NavBar";

const messages = defineMessages({
    title: {
        defaultMessage: "Title",
        id: "AppBar.Title",
    },
});

const styles = (theme: Theme) =>
    createStyles({
        grow: {
            flex: "1 1 auto",
        },
        root: {
            boxShadow: "none",
            transition: theme.transitions.create("width"),
        },
        title: {
            flex: "0 1 auto",
            marginLeft: 24,
        },
    });

const dispatchToProps = {
    changeLocale,
};
type Props = WithStyles<typeof styles> & InjectedIntlProps & typeof dispatchToProps;

const decorator = compose(
    injectIntl,
    withStyles(styles),
    connect(
        undefined,
        dispatchToProps,
    ),
);

// tslint:disable-next-line:no-shadowed-variable
export default decorator(({ classes, intl, changeLocale }: Props) => {
    const handleToggleLanguage = () => {
        const { locale } = intl;

        changeLocale(getOtherLocale(locale));
    };

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.title}>
                    <FormattedMessage {...messages.title} />
                </Typography>
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
