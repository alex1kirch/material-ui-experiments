import { configure } from "enzyme";
import * as ReactSixteenAdapter from "enzyme-adapter-react-16";
import "jest-enzyme";

configure({ adapter: new ReactSixteenAdapter() });
