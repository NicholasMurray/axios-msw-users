import { useState } from "react";
import { useDispatch } from "react-redux";
import { AngularIcon, ReactIcon, VueIcon } from "./../icons/index";
import StyledSkills from "./skills.styles";
import actions from "../../actions";

function Skills({ user }) {
  const [skills, setSkills] = useState(user.skills);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    skills[e.currentTarget.getAttribute("data-skill")] =
      !skills[e.currentTarget.getAttribute("data-skill")];

    setSkills(
      skills,
      dispatch(actions.userActions.updateSkills(e.currentTarget.id, skills))
    );

    //console.log(e, "clicked");
  };

  return (
    <StyledSkills>
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
    </StyledSkills>
  );
}

export default Skills;
