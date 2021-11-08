import { render, screen, waitFor } from "@testing-library/react";
import App, { usersURL } from "./App";
import Results from "./mocks/data/results";

import { rest } from "msw";
import { setupServer } from "msw/node";

const userResponse = rest.get(usersURL.split("?")[0], (req, res, ctx) => {
  return res(
    ctx.json({
      results: Results,
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

  const headerTitle = await screen.findByText(/Random Developers/);
  expect(headerTitle).toBeInTheDocument();
});
