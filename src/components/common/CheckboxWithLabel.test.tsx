import { shallow } from "enzyme";
import * as React from "react";
import CheckboxWithLabel from "./CheckboxWithLabel";

describe("<CheckboxWithLabel />", () => {
    test("should changes the text after click", () => {
        const ON = "On";
        const OFF = "Off";
        const checkbox = shallow(<CheckboxWithLabel labelOn={ON} labelOff={OFF} />);

        expect(checkbox.text()).toEqual(OFF);

        checkbox.find("input").simulate("change");

        expect(checkbox.text()).toEqual(ON);
    });
});
