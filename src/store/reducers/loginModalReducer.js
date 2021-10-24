//  sets the initial state of the modal to false, so it is hidden until state is changed

const initialState = {
  visibile: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // handles the VISIBLE action by return true, which wil toggle the className on the component via a ternary
    case "VISIBLE":
      return {
        visible: true,
      };
    // handle the HIDDEN action by setting visible to false, which will toggle the class name with a ternary
    case "HIDDEN":
      return {
        visible: false,
      };
    default:
      return state;
  }
};

export default reducer;
