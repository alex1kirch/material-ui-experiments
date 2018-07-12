import * as React from "react";
import EventListener from "react-event-listener";

interface IState {
    isOpen: boolean;
    left: number;
    top: number;
    anchorEl?: HTMLElement;
}

export type ContextMenuProps = IState & {
    onContextMenu: (ev: React.MouseEvent<{}>) => void;
    onClose: (ev: React.MouseEvent<{}>) => void;
};

interface IProps {
    /**
     * If true, the browser context menu of backdrop element will be disabled in the case of the menu is open
     *
     * @type {boolean}
     * @memberof IProps
     */
    disableBackdropMenu?: boolean;
    /**
     * If true, the menu won't be open
     *
     * @type {boolean}
     * @memberof IProps
     */
    disabled?: boolean;
}

function contextMenu<TOwnProps>(OriginalComponent: React.ComponentType<TOwnProps & ContextMenuProps>) {
    return class ContextMenu extends React.Component<IProps & TOwnProps, IState> {
        public state: IState = { isOpen: false, left: 0, top: 0 };

        public onContextMenu = (ev: React.MouseEvent<{}>) => {
            const { clientX, clientY, target } = ev;
            const { anchorEl = target as HTMLElement } = this.state;
            const { disableBackdropMenu, disabled } = this.props;

            if (anchorEl !== target) {
                const elements = document.elementsFromPoint(clientX, clientY);
                const hasAnchor = elements.some(element => element === anchorEl);

                if (!hasAnchor) {
                    if (disableBackdropMenu) {
                        ev.stopPropagation();
                        ev.preventDefault();
                    }

                    return;
                }
            }

            ev.stopPropagation();
            ev.preventDefault();

            if (disabled) {
                return;
            }

            this.setState(() => ({
                anchorEl,
                isOpen: true,
                left: clientX,
                top: clientY,
            }));
        };

        public onClose = (ev: React.SyntheticEvent<{}> | UIEvent) => {
            ev.stopPropagation();
            ev.preventDefault();

            this.setState(() => ({ isOpen: false }));
        };

        public render() {
            return (
                <React.Fragment>
                    <OriginalComponent
                        {...this.props}
                        {...this.state}
                        onContextMenu={this.onContextMenu}
                        onClose={this.onClose}
                    />
                    <EventListener target="window" onResize={this.onClose} />
                </React.Fragment>
            );
        }
    };
}

export default contextMenu;
