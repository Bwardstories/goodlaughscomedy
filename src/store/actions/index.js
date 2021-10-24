export const login = loginFormData => {
  return dispatch => {
    dispatch({
      type: "LOGIN",
      payload: loginFormData,
    });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: "LOGOUT",
    });
  };
};
