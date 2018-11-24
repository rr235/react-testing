import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../commentBox";

it("shows a comment box", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(CommentBox).length).toEqual(1);
});
