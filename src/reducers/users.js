import Results from "../mocks/data/results";

const initState = {
  users: Results,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_SKILL": {
      return {
        // Again copy the entire state object
        ...state,
        // This time, we need to make a copy of the old users array
        users: state.users.map((user) => {
          // If this isn't the todo item we're looking for, leave it alone
          if (user.login.uuid !== action.payload.id) {
            return user;
          }

          // We've found the user that has to change. Return a copy:
          return {
            ...user,
            // Update the skills
            skills: { angular: true, react: true, vue: false },
          };
        }),
      };
    }
    default:
      return state;
  }
};
