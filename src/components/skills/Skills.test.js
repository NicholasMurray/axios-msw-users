import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
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
  expect(angularSkill).not.toHaveClass("skilled");

  const reactSkill = container.querySelector('[data-skill="react"]');
  expect(reactSkill).toHaveClass("skilled");

  const vueSkill = container.querySelector('[data-skill="vue"]');
  expect(vueSkill).not.toHaveClass("skilled");
});

// test("It toggles a skill when icon is clicked on", async () => {
//   const { container } = renderSkills(testUser);
//   const reactSkillIcon = container.querySelector('[data-skill="react"]');
//   fireEvent.click(reactSkillIcon);

//   await waitFor(() => {
//     const reactSkillIconAfterClick = container.querySelector(
//       '[data-skill="react"]'
//     );
//     expect(reactSkillIconAfterClick).not.toHaveClass("skilled");
//   });
// });
