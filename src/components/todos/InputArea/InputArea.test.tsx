import { shallow } from "enzyme";
import * as React from "react";
import InputArea, { IInputAreaProps } from "./InputArea";

const setup = (propOverrides?: Partial<IInputAreaProps>) => {
    const props: IInputAreaProps = {
        onSubmit: jest.fn(),
        ...propOverrides,
    };

    const wrapper = shallow(<InputArea {...props} />);
    const getInput = (wr: typeof wrapper) => wr.find("input");

    return {
        addButton: wrapper.find("button"),
        getInput,
        input: getInput(wrapper),
        props,
        wrapper,
    };
};

describe("<InputArea />", () => {
    it("should contain an input and a button", () => {
        // arrange
        const { addButton, input } = setup();
        // act
        // assert
        expect(input.exists()).toBeTruthy();
        expect(addButton.containsMatchingElement(<button>Add</button>)).toBeTruthy();
    });

    it("should accept input", () => {
        // arrange
        const { input, wrapper, getInput } = setup();
        const expected = "TODO something";
        // act
        input.simulate("change", { target: { value: expected } });
        const updatedInput = getInput(wrapper.update());
        // assert
        expect(updatedInput.prop("value")).toEqual(expected);
    });

    it("should call onSubmit when Add is clicked", () => {
        // arrange
        const { addButton, input, props } = setup();
        const expected = "TODO something";
        // act
        input.simulate("change", { target: { value: expected } });
        addButton.simulate("click");
        // assert

        expect(props.onSubmit).toHaveBeenCalledWith(expected);
    });
});
