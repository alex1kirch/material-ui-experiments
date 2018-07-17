import * as React from "react";
import InputArea from "../InputArea";
import TodoList from "../TodoList";

export interface ITodoListContainerState {
    todos: string[];
}

export default class TodoListContainer extends React.Component<{}, ITodoListContainerState> {
    public state: ITodoListContainerState = { todos: [] };

    public addItem = (text: string) => {
        this.setState(prevState => ({ todos: [...prevState.todos, text] }));
    };

    public render() {
        const { todos } = this.state;

        return (
            <div>
                <InputArea onSubmit={this.addItem} />
                <TodoList todos={todos} />
            </div>
        );
    }
}
