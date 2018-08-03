import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
import RestoreIcon from "@material-ui/icons/Restore";
import * as React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";

const idPrefix = "NavBar";
const messages = defineMessages({
    contextMenu: {
        defaultMessage: "Context menu",
        id: `${idPrefix}.ContextMenu`,
    },
    favorites: {
        defaultMessage: "Favorites",
        id: `${idPrefix}.Favorites`,
    },
    nearby: {
        defaultMessage: "Nearby",
        id: `${idPrefix}.Nearby`,
    },
    recents: {
        defaultMessage: "Recents",
        id: `${idPrefix}.Recents`,
    },
});

const styles = (theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main,
            width: 500,
        },
        // tslint:disable-next-line:object-literal-sort-keys
        activeLink: {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
        },
    });

const routes: Array<{
    path: string;
    icon: string | React.ReactElement<any>;
    label: React.ReactNode;
}> = [
    {
        icon: <RestoreIcon />,
        label: <FormattedMessage {...messages.contextMenu} />,
        path: "/contextMenu",
    },
    // {
    //     icon: <FavoriteIcon />,
    //     label: <FormattedMessage {...messages.favorites} />,
    //     path: "/favorites",
    // },
    // {
    //     icon: <LocationOnIcon />,
    //     label: <FormattedMessage {...messages.nearby} />,
    //     path: "/nearby",
    // },
];

type Props = WithStyles<typeof styles> & RouteComponentProps<{}>;
class NavBar extends React.Component<Props> {
    public handleChange = (event: React.ChangeEvent<{}>, path: string) => {
        event.stopPropagation();

        const { history } = this.props;
        history.push(path);
    };

    public render() {
        const { classes, location } = this.props;

        return (
            <BottomNavigation
                value={location.pathname}
                onChange={this.handleChange}
                showLabels={true}
                className={classes.root}
            >
                {routes.map(r => (
                    <BottomNavigationAction
                        classes={{ selected: classes.activeLink }}
                        showLabel={false}
                        key={r.path}
                        value={r.path}
                        label={r.label}
                        icon={r.icon}
                    />
                ))}
            </BottomNavigation>
        );
    }
}

const decorator = compose(
    withRouter,
    withStyles(styles),
);
export default decorator(NavBar);
