import React from "react";
import renderer from "react-test-renderer";
import Show from "./Show";


it('renders correctly', () => {
    const tree = renderer.create(
      <Show id={6048}/>
    ).toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
});
