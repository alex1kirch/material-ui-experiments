import { shallow } from "enzyme";
import * as React from "react";
import TodoList, { ITodoListProps } from "./TodoList";

const setup = (propOverrides?: Partial<ITodoListProps>) => {
    const props: ITodoListProps = {
        ...propOverrides,
    };
    const wrapper = shallow(<TodoList {...props} />);

    return {
        listItems: wrapper.find("li"),
        props,
        wrapper,
    };
};

describe("<TodoList />", () => {
    it("should render zero items", () => {
        // arrange
        const { listItems } = setup({ todos: [] });
        // act
        // assert
        expect(listItems).toHaveLength(0);
    });

    it("should render undefined items", () => {
        // arrange
        const { listItems } = setup({ todos: undefined });
        // act
        // assert
        expect(listItems).toHaveLength(0);
    });

    it("should render the items", () => {
        const todos = ["TODO 1", "TODO 2", "TODO 3"];
        // arrange
        const { listItems } = setup({ todos });
        // act
        // assert
        expect(listItems).toHaveLength(3);
    });
});
