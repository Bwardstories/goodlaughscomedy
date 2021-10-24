import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginModalReducer from "./loginModalReducer";

// takes the combineReducers method and passes in each reducer through a key value pair, and then combines the reducers and names each state the value that is passed in through the key
const reducers = combineReducers({
  users: userReducer,
  loginModal: loginModalReducer,
});

export default reducers;
