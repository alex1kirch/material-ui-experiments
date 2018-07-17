import { shallow } from "enzyme";
import * as React from "react";
import LinkWithCheckbox, { ILinkWithCheckboxProps } from "../LinkWithCheckbox";

const setup = (propOverrides?: Partial<ILinkWithCheckboxProps>) => {
    const props: ILinkWithCheckboxProps = {
        isChecked: false,
        onChange: jest.fn(),
        ...propOverrides,
    };

    const wrapper = shallow(<LinkWithCheckbox {...props} />);

    return {
        input: wrapper.find("[data-test='input']"),
        props,
        wrapper,
    };
};

describe("<LinkWithCheckbox />", () => {
    it("renders without crashing", () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });

    it("should be checked by default", () => {
        const { input, wrapper } = setup({ isChecked: true });

        const actual = input.props().checked;
        expect(actual).toBeTruthy();
        // expect(wrapper).toMatchSnapshot();
    });

    it("should call onChange on input onChange action", () => {
        const { input, props } = setup();
        input.simulate("change");
        expect(props.onChange).toBeCalled();
    });
});
