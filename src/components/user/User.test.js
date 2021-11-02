import React from "react";
import { Route } from "react-router-dom";
import { renderWithProviders } from "./../../test-utils/test-utils";
import User from "./User";

test("It renders the username supplied from the params", async () => {
  const { findByText } = renderWithProviders(
    <Route path="/user/:username">
      <User />
    </Route>,
    {
      route: "/user/iamparam",
    }
  );
  await findByText("Selected User: iamparam");
});
