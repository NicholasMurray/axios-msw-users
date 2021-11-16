import React from "react";
import { render, screen } from "@testing-library/react";
import Results from "../../mocks/data/results";
import UserDetails from "./UserDetails";

const testUser = Results[0];

test("It renders the users full name supplied from the params", async () => {
  render(<UserDetails user={testUser} />);
  const userFullName = await screen.findByText(
    `Name: ${testUser.name.first} ${testUser.name.last}`
  );
  expect(userFullName).toBeInTheDocument();
});

test("It renders the users phone number supplied from the params", async () => {
  render(<UserDetails user={testUser} />);
  const userPhoneNumber = await screen.findByText(`Phone: ${testUser.phone}`);
  expect(userPhoneNumber).toBeInTheDocument();
});

test("It renders the users email address number supplied from the params", async () => {
  render(<UserDetails user={testUser} />);
  const userEmail = await screen.findByText(`Email: ${testUser.email}`);
  expect(userEmail).toBeInTheDocument();
});
