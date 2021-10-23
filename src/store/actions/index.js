export const signup = signupFormData => {
  return dispatch => {
    dispatch({
      type: "SIGNUP",
      payload: signupFormData,
    });
  };
};
