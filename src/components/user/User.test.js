import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./../../store/store";
import Results from "../../mocks/data/results";
import User from "./User";

const testUserName = Results[0].login.username;
const testFullName = `${Results[0].name.first} ${Results[0].name.last}`;

function renderUser(username) {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/user/${username}`]}>
        <Route path="/user/:username">
          <User />
        </Route>
      </MemoryRouter>
    </Provider>
  );
}

test("It renders the username supplied from the params", async () => {
  renderUser(testUserName);
  const user = await screen.findByText(testUserName);
  expect(user).toBeInTheDocument();
});

test("It renders the user details of the user selected from the username param", async () => {
  renderUser(testUserName);
  const userFullName = await screen.findByText(`Name: ${testFullName}`);
  expect(userFullName).toBeInTheDocument();
});
