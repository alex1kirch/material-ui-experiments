import Menu, { MenuProps } from "@material-ui/core/Menu";
import * as React from "react";
import contextMenu, { ContextMenuProps } from "../../decorators/contextMenu";

interface IProps {
    /**
     * Properties applied to the Menu element.
     *
     * @type {MenuProps}
     * @memberof IProps
     */
    MenuProps?: MenuProps;

    /**
     * Menu contents, normally MenuItems. The Menu component is used as context menu.
     *
     * @type {React.ReactNode}
     * @memberof IProps
     */
    menuContent?: React.ReactNode;

    /**
     * The className of the ContextMenu component
     *
     * @type {string}
     * @memberof IProps
     */
    className?: string;
}

const ContextMenu: React.SFC<IProps & ContextMenuProps> = props => {
    // tslint:disable-next-line:no-shadowed-variable
    const { className, children, MenuProps, menuContent, isOpen, onContextMenu, left, top, onClose } = props;

    return (
        <div className={className} onContextMenu={onContextMenu}>
            {children}
            <Menu
                key={`${left}, ${top}`}
                open={isOpen}
                anchorPosition={{ left, top }}
                onClose={onClose}
                anchorReference="anchorPosition"
                BackdropProps={{
                    invisible: true,
                    onContextMenu,
                }}
                disableRestoreFocus={true}
                onClick={onClose}
                {...MenuProps}
            >
                {menuContent}
            </Menu>
        </div>
    );
};

export default contextMenu(ContextMenu);
