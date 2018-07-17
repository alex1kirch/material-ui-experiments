import * as React from "react";

interface IState {
    isChecked: boolean;
}
interface IProps {
    labelOn: string;
    labelOff: string;
}
export default class CheckboxWithLabel extends React.Component<IProps, IState> {
    public state: IState = { isChecked: false };

    public onChange = () => {
        this.setState(prevState => ({
            isChecked: !prevState.isChecked,
        }));
    };

    public render() {
        const { labelOn, labelOff } = this.props;

        return (
            <label>
                <input type="checkbox" checked={this.state.isChecked} onChange={this.onChange} />
                {this.state.isChecked ? labelOn : labelOff}
            </label>
        );
    }
}
