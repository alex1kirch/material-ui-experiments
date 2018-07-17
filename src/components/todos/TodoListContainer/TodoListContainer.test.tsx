import { shallow } from "enzyme";
import * as React from "react";
import InputArea from "../InputArea";
import TodoList from "../TodoList";
import TodoListContainer from "./TodoListContainer";

const setup = () => {
    const wrapper = shallow(<TodoListContainer />);
    const getTodoList = (wr: typeof wrapper) => wr.find(TodoList);

    return {
        getTodoList,
        inputArea: wrapper.find(InputArea),
        todoList: getTodoList(wrapper),
        wrapper,
    };
};

describe("<TodoListContainer />", () => {
    it("should render InputArea and TodoList", () => {
        // arrange
        const { inputArea, todoList } = setup();
        // act
        // assert
        expect(inputArea.exists()).toBeTruthy();
        expect(todoList.exists()).toBeTruthy();
    });

    it("should start with an empty list", () => {
        // arrange
        const { todoList } = setup();
        const listProps = todoList.props();
        // act
        // assert
        expect(listProps.todos).toHaveLength(0);
    });

    it("adds items to the list", () => {
        // arrange
        const { wrapper, inputArea, getTodoList } = setup();
        const expected = "Sam Adams";
        // act
        const inputAreaProps = inputArea.props();
        inputAreaProps.onSubmit(expected);
        const updatedTodoList = getTodoList(wrapper.update());
        const listProps = updatedTodoList.props();
        // assert
        expect(listProps.todos).toHaveLength(1);
        expect(listProps.todos![0]).toEqual(expected);
    });
});
