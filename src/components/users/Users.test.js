import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Results from "../../mocks/data/results";
import Users from "./Users";

let mockStore = null;
let store = null;
let results = null;

beforeEach(() => {
  results = Array.from(Results.slice(0, 1));
  mockStore = configureStore([]);
  store = mockStore({ users: results });
});

afterEach(() => {
  mockStore = null;
  store = null;
  results = null;
});

function renderUsers() {
  return render(
    <Provider store={store}>
      <Router>
        <Users />
      </Router>
    </Provider>
  );
}

test("it should display no users message if no users supplied", async () => {
  store = mockStore();
  renderUsers();
  const user = await screen.findByText("No users currently");
  expect(user).toBeInTheDocument();
});

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
