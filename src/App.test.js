import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header title", () => {
  render(<App />);
  const headerTitle = screen.getByText(/Users/);
  expect(headerTitle).toBeInTheDocument();
});
