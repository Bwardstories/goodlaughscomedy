const initialState = {
  allLiveEvents: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //  loads the events for the events view and main page
    case "LOADLIVEEVENTS":
      console.log(state, action);
      return {
        ...state,
        allLiveEvents: action.payload,
      };
    // default case that returns the current state if no cases are met
    default:
      return state;
  }
};

export default reducer;
