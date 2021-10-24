//  sets initial state data for user state
const initialState = {
  username: "",
  email: "",
  isAdmin: false,
};

// reducer to handle login and logout00 action types
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //  handles the LOGIN action by setsting the global state to the logged in user data
    case "LOGIN":
      return {
        username: state.username,
        email: state.email,
        isAdmin: state.isAdmin,
      };
    // handles the LOGOUT action by resetting the global state of the user data to empty strings
    case "LOGOUT":
      return {
        username: "",
        email: "",
        isAdmin: false,
      };
    // default case that returns the current state if no cases are met
    default:
      return state;
  }
};

export default reducer;
