import { shallow } from "enzyme";
import enzymeToJson from "enzyme-to-json";
import "jest-enzyme";
import * as React from "react";
import Link, { STATUS } from "../Link";

describe("<Link />", () => {
    xit("renders without crashing", () => {
        const wrapper = shallow(<Link>Facebook</Link>);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    xit("should changes the class when hovered", () => {
        const wrapper = shallow(<Link page="http://www.facebook.com">Facebook</Link>);
        expect(wrapper.hasClass(STATUS.NORMAL)).toBeTruthy();

        wrapper.simulate("mouseEnter");
        expect(wrapper.hasClass(STATUS.HOVERED)).toBeTruthy();

        wrapper.simulate("mouseLeave");
        expect(wrapper.hasClass(STATUS.NORMAL)).toBeTruthy();
    });

    xit("should changes the class when hovered (toMatchSnapshot)", () => {
        const wrapper = shallow(<Link page="http://www.facebook.com">Facebook</Link>);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();

        wrapper.simulate("mouseEnter");
        expect(enzymeToJson(wrapper)).toMatchSnapshot();

        wrapper.simulate("mouseLeave");
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it("shallow lifecycle", () => {
        let wrapper = shallow(<Link page="http://www.facebook.com">Facebook</Link>);
        wrapper = wrapper.setProps({ page: "111" });
        wrapper.unmount();
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });
});
