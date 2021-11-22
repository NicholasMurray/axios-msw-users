const updateSkills = (id, skills) => {
  return {
    type: "UPDATE_SKILLS",
    payload: {
      id: id,
      skills: skills,
    },
  };
};

const userActions = {
  updateSkills,
};

export default userActions;
