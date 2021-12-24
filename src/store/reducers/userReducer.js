//  sets initial state data for user state
const initialState = {
  username: '',
  isAdmin: false,
  email: '',
  onMailingList: false,
}

// reducer to handle login and logout action types
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //  handles the LOGIN action by setting the global state to the logged in user data
    case 'LOGIN':
      return {
        ...state,
        username: action.payload.username,
        isAdmin: action.payload.isAdmin,
        email: action.payload.email,
        onMailingList: action.payload.onMailingList,
      }
    // handles the LOGOUT action by resetting the global state of the user data to empty strings
    case 'LOGOUT':
      return {
        username: '',
        email: '',
        isAdmin: false,
        onMailingList: false,
      }
    // default case that returns the current state if no cases are met
    default:
      return state
  }
}

export default reducer
