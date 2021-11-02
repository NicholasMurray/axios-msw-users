import { render, screen, waitFor } from "@testing-library/react";
import App, { usersURL } from "./App";

import { rest } from "msw";
import { setupServer } from "msw/node";

const userResponse = rest.get(usersURL.split("?")[0], (req, res, ctx) => {
  return res(
    ctx.json({
      results: [
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
      ],
    })
  );
});

const handlers = [userResponse];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders header title", async () => {
  await waitFor(() => render(<App />));

  const headerTitle = await screen.findByText(/Users/);
  expect(headerTitle).toBeInTheDocument();
});
