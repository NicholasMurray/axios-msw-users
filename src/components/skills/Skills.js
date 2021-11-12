import { useState } from "react";
import { useDispatch } from "react-redux";
import { AngularIcon, ReactIcon, VueIcon } from "./../icons/index";
import "./Skills.css";

function Skills({ user }) {
  const [skills, setSkills] = useState(user.skills);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    skills[e.currentTarget.getAttribute("data-skill")] =
      !skills[e.currentTarget.getAttribute("data-skill")];

    setSkills(skills);

    dispatch({
      type: "UPDATE_SKILL",
      payload: {
        id: e.currentTarget.id,
        skills: skills,
      },
    });
  };

  return (
    <div id="skills-container">
      <AngularIcon
        id={user.login.uuid}
        onClick={clickHandler}
        className={skills.angular ? "skilled" : ""}
        data-skill="angular"
      />
      <ReactIcon
        id={user.login.uuid}
        onClick={clickHandler}
        className={skills.react ? "skilled" : ""}
        data-skill="react"
      />
      <VueIcon
        id={user.login.uuid}
        onClick={clickHandler}
        className={skills.vue ? "skilled" : ""}
        data-skill="vue"
      />
    </div>
  );
}

export default Skills;
