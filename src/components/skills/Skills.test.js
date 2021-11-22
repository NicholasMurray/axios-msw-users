import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Results from "../../mocks/data/results";
import Skills from "./Skills";
import userActions from "../../actions/userActions";

let mockStore = null;
let store = null;
let results = null;
let testUser = null;

beforeEach(() => {
  results = Array.from(Results.slice(0, 1));
  mockStore = configureStore([]);
  store = mockStore({ users: results });
  store.dispatch = jest.fn();
  testUser = {
    gender: "male",
    name: {
      title: "Mr",
      first: "Josip",
      last: "Michl",
    },
    skills: {
      angular: false,
      react: true,
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
  };
});

afterEach(() => {
  mockStore = null;
  store = null;
  results = null;
});

function renderSkills(user) {
  return render(
    <Provider store={store}>
      <Skills user={user} />
    </Provider>
  );
}

test("It renders skill icons highlighted for the relevant skills", async () => {
  const { container } = renderSkills(testUser);

  const angularSkill = container.querySelector('[data-skill="angular"]');
  expect(angularSkill).not.toHaveClass("skilled");

  const reactSkill = container.querySelector('[data-skill="react"]');
  expect(reactSkill).toHaveClass("skilled");

  const vueSkill = container.querySelector('[data-skill="vue"]');
  expect(vueSkill).toHaveClass("skilled");
});

test("It should dispatch an action on click to update the react skill", async () => {
  const { container } = renderSkills(testUser);
  const reactSkillIcon = container.querySelector('[data-skill="react"]');
  fireEvent.click(reactSkillIcon);

  const testSkills = {
    angular: false,
    react: false,
    vue: true,
  };

  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(
    userActions.updateSkills(testUser.login.uuid, testSkills)
  );
});

test("It should dispatch an action on click to update the angular skill", async () => {
  const { container } = renderSkills(testUser);
  const angularSkillIcon = container.querySelector('[data-skill="angular"]');
  fireEvent.click(angularSkillIcon);

  const testSkills = {
    angular: true,
    react: true,
    vue: true,
  };

  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(
    userActions.updateSkills(testUser.login.uuid, testSkills)
  );
});

test("It should dispatch an action on click to update the vue skill", async () => {
  testUser.skills = {
    angular: true,
    react: true,
    vue: true,
  };
  const { container } = renderSkills(testUser);
  const vueSkillIcon = container.querySelector('[data-skill="vue"]');
  fireEvent.click(vueSkillIcon);

  const testSkills = {
    angular: true,
    react: true,
    vue: false,
  };

  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(
    userActions.updateSkills(testUser.login.uuid, testSkills)
  );
});
