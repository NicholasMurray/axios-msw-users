import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Users from "./Users";
import Results from "../../mocks/data/results";
import UsersContext from "./../../providers/UsersContext";

function renderUsers(users) {
  return render(
    <UsersContext.Provider value={users}>
      <Router>
        <Users />
      </Router>
    </UsersContext.Provider>
  );
}

test("it should have the correct username TestyMcTesty", async () => {
  const users = Results;
  renderUsers(users);
  const user = await screen.findByText("TestyMcTesty");
  expect(user).toBeInTheDocument();
});

test("User Avatat must have a src and an alt of username", async () => {
  const users = Results;
  renderUsers(users);
  const avatar = await screen.findByRole("img");
  expect(avatar).toHaveAttribute(
    "src",
    "https://randomuser.me/api/portraits/med/men/0.jpg"
  );
  expect(avatar).toHaveAttribute("alt", "TestyMcTesty");
});
