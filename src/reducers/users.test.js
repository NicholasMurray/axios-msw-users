import { reducer } from "./users";
import userActions from "../actions/userActions";
import results from "../mocks/data/results";

const mockPreviousState = {
  users: results.slice(0, 1),
};

const updatedSkills = {
  angular: true,
  react: false,
  vue: true,
};

const mockupdatedState = {
  users: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Josip",
        last: "Michl",
      },
      skills: {
        angular: true,
        react: false,
        vue: true,
      },
      location: {
        street: {
          number: 9457,
          name: "Rosenstraße",
        },
        city: "Chemnitzer Land",
        state: "Saarland",
        country: "Germany",
        postcode: 15869,
        coordinates: {
          latitude: "-44.8147",
          longitude: "-8.1416",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      email: "josip.michl@example.com",
      login: {
        uuid: "893fc2b1-ff88-4504-a86f-34315ac12a31",
        username: "greenzebra288",
        password: "kick",
        salt: "70GHucqz",
        md5: "9ca57f46534f11a4b5dda5b8a97c7675",
        sha1: "a85b802dde00993f090085937ece3fe42ae31284",
        sha256:
          "b2a177a62ad4f3e86ad02964710c91a8e5a5666f7749309794dcaa874ec18cf0",
      },
      dob: {
        date: "1958-11-08T09:38:20.848Z",
        age: 63,
      },
      registered: {
        date: "2005-11-24T19:29:39.814Z",
        age: 16,
      },
      phone: "0367-0161078",
      cell: "0179-1898150",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/6.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
      },
      nat: "DE",
    },
  ],
};

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({ users: results });
});

test("should handle a users skills being updated", () => {
  const previousState = mockPreviousState;
  expect(
    reducer(
      previousState,
      userActions.updateSkills(results[0].login.uuid, updatedSkills)
    )
  ).toEqual(mockupdatedState);
});

test("should handle not update the state if the user login.uuid is not found", () => {
  const previousState = mockPreviousState;
  expect(
    reducer(
      previousState,
      userActions.updateSkills("12345-12345", updatedSkills)
    )
  ).toEqual(previousState);
});
