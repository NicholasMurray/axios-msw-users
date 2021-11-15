import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import Results from "../../mocks/data/results";
import Users from "./Users";

function renderUsers() {
  return render(
    <Provider store={store}>
      <Router>
        <Users />
      </Router>
    </Provider>
  );
}

test("it should have the correct username TestyMcTesty", async () => {
  const users = Results;
  renderUsers();
  const user = await screen.findByText(users[0].login.username);
  expect(user).toBeInTheDocument();
});

test("User Avatar must have a src and an alt of username", async () => {
  const users = Results;
  renderUsers();
  const avatar = await screen.findAllByRole("img");
  expect(avatar[0]).toHaveAttribute("src", users[0].picture.medium);
  expect(avatar[0]).toHaveAttribute("alt", users[0].login.username);
});
