import { combineReducers } from "redux";
import { userLoginReducer } from "./authReducers";
import { storyReducer } from "./storyReducers";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  story: storyReducer,
});

export default rootReducer;
