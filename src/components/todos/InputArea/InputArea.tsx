import * as React from "react";

export interface IInputAreaProps {
    onSubmit: (text: string) => void;
}
export interface IInputAreaState {
    text: string;
}

export default class InputArea extends React.Component<IInputAreaProps, IInputAreaState> {
    public state: IInputAreaState = { text: "" };

    public setText = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: event.target.value });
    };

    public handleClick = () => {
        this.props.onSubmit(this.state.text);
    };

    public render() {
        const { text } = this.state;

        return (
            <div>
                <input value={text} onChange={this.setText} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}
