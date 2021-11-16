import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import Results from "../../mocks/data/results";
import Skills from "./Skills";

const testUser = Results[0];

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
  expect(angularSkill.classList.contains("skilled")).toBe(false);

  const reactSkill = container.querySelector('[data-skill="react"]');
  expect(reactSkill.classList.contains("skilled")).toBe(true);

  const vueSkill = container.querySelector('[data-skill="vue"]');
  expect(vueSkill.classList.contains("skilled")).toBe(false);
});
