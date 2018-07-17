import * as React from "react";
import EventListener from "react-event-listener";

export const STATUS = {
    HOVERED: "hovered",
    NORMAL: "normal",
};

interface IState {
    class: string;
}
interface IProps {
    page?: string;
}
export default class Link extends React.Component<IProps, IState> {
    public state = {
        class: STATUS.NORMAL,
    };

    constructor(props: IProps) {
        super(props);
        // tslint:disable-next-line:no-console
        console.log("constructor");
    }

    public shouldComponentUpdate() {
        // tslint:disable-next-line:no-console
        console.log("shouldComponentUpdate");

        return true;
    }

    public componentWillUpdate() {
        // tslint:disable-next-line:no-console
        console.log("componentWillUpdate");
    }

    public componentDidUpdate() {
        // tslint:disable-next-line:no-console
        console.log("componentDidUpdate");
    }

    public componentDidMount() {
        // tslint:disable-next-line:no-console
        console.log("componentDidMount");
    }

    public componentWillUnmount() {
        // tslint:disable-next-line:no-console
        console.log("componentWillUnmount");
    }

    public componentDidCatch() {
        // tslint:disable-next-line:no-console
        console.log("componentDidCatch");
    }

    public onResize() {
        // tslint:disable-next-line:no-console
        console.log("onResize");
    }

    public render() {
        return (
            <a
                className={this.state.class}
                href={this.props.page || "#"}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.children}
                <EventListener target="window" onResize={this.onResize} />
            </a>
        );
    }

    private onMouseEnter = () => {
        this.setState({ class: STATUS.HOVERED });
    };

    private onMouseLeave = () => {
        this.setState({ class: STATUS.NORMAL });
    };
}
