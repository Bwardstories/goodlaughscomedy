export const login = loginFormData => {
  return dispatch => {
    dispatch({
      type: 'LOGIN',
      payload: loginFormData,
    })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: 'LOGOUT',
    })
  }
}

export const loadLiveEvents = liveEventArray => {
  console.log(liveEventArray, 'from actions')
  return dispatch => {
    dispatch({
      type: 'LOADLIVEEVENTS',
      payload: liveEventArray,
    })
  }
}

export const showUserSettings = () => {
  return dispatch => {
    dispatch({
      type: 'SHOWUSERSETTINGS',
    })
  }
}

export const hideUserSettings = () => {
  return dispatch => {
    dispatch({
      type: 'HIDEUSERSETTINGS',
    })
  }
}
