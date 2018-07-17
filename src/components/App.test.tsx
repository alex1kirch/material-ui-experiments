import { shallow } from "enzyme";
import enzymeToJson from "enzyme-to-json";
import * as React from "react";
import App from "./App";

it("renders a snapshot", () => {
    const wrapper = shallow(<App />);
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
});
