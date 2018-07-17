import * as React from "react";

export interface ITodoListProps {
    todos?: string[];
}
export default class TodoList extends React.Component<ITodoListProps, any> {
    public render() {
        const { todos = [] } = this.props;
        const todoItems = todos.map((todoText, i) => <li key={`${todoText}-${i}`}>{todoText}</li>);

        return <ul>{todoItems}</ul>;
    }
}
