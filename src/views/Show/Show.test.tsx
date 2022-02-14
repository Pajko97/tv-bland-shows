import React from "react";
import renderer from "react-test-renderer";
import API from "../../api/shows-api";
import ShowModel from "../../models/Show";
import Show from "./Show";

it("render app", async () => {
  let render;
  let api = new API();
  await api
    .getShowCast(1)
    .then((res) => {
      render = renderer.create(<Show id={1} />).toJSON();
    })
    .catch((error) => console.error(error));

  expect(render).toMatchSnapshot();
});
