import { combineReducers } from "redux";
import { userLoginReducer } from "./authReducers";
import { createStoryReducer } from "./storyReducers";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  createStory: createStoryReducer,
});

export default rootReducer;
