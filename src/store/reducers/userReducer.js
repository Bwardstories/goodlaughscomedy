const initialState = {
  username: "",
  email: "",
  isAdmin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        username: state.username,
        email: state.email,
        isAdmin: state.isAdmin,
      };
    case "LOGOUT":
      return {
        username: "",
        email: "",
        isAdmin: false,
      };
    default:
      return state;
  }
};

export default reducer;
