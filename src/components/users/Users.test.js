import { render, screen } from "@testing-library/react";
import Users from "./Users";

const results = [
  {
    gender: "male",
    name: {
      title: "Monsieur",
      first: "Didier",
      last: "Lacroix",
    },
    location: {
      street: {
        number: 4956,
        name: "Esplanade du 9 Novembre 1989",
      },
      city: "Unterbäch",
      state: "Obwalden",
      country: "Switzerland",
      postcode: 3918,
    },
    email: "didier.lacroix@example.com",
    login: {
      uuid: "eb6e71d4-b12c-4df1-be14-668794353727",
      username: "TestyMcTesty",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/0.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/0.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
    },
    nat: "CH",
  },
];

test("it should have the correct username TestyMcTesty", async () => {
  render(<Users users={results} />);
  const user = await screen.findByText("TestyMcTesty");
  expect(user).toBeVisible();
});

test("User Avatat must have a src and an alt of username", async () => {
  render(<Users users={results} />);
  const avatar = await screen.findByRole("img");
  expect(avatar).toHaveAttribute(
    "src",
    "https://randomuser.me/api/portraits/med/men/0.jpg"
  );
  expect(avatar).toHaveAttribute("alt", "TestyMcTesty");
});
