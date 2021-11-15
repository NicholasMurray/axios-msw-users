import React from "react";
import { render } from "@testing-library/react";
import Avatar from "./Avatar";
import Results from "../../mocks/data/results";

const user = Results[0];

test("It renders the user avatar correctly", () => {
  const { getByAltText } = render(<Avatar user={user} />);
  const image = getByAltText(user.login.username);
  expect(image.src).toContain(user.picture.medium);
  expect(image.title).toContain(user.login.username);
});
