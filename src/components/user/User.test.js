import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import User from "./User";
import UsersContext from "./../../providers/UsersContext";
import Results from "../../mocks/data/results";

function renderUser(users, username) {
  return render(
    <UsersContext.Provider value={users}>
      <MemoryRouter initialEntries={[`/user/${username}`]}>
        <Route path="/user/:username">
          <User />
        </Route>
      </MemoryRouter>
    </UsersContext.Provider>
  );
}

test("It renders the username supplied from the params", async () => {
  const users = Results;
  const username = "TestyMcTesty";
  renderUser(users, username);
  const user = await screen.findByText(username);
  expect(user).toBeInTheDocument();
});

test("It renders the user details of the user selected from the username param", async () => {
  const users = Results;
  const username = "TestyMcTesty";
  renderUser(users, username);
  const userFullName = await screen.findByText("Name: Didier Lacroix");
  expect(userFullName).toBeInTheDocument();
});
