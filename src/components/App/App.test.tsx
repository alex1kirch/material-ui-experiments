import { shallow } from "enzyme";
import * as React from "react";
import App from "./index";

it("renders without crashing", () => {
  shallow(<App />);
});
