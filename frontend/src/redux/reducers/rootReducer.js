import { combineReducers } from "redux";
import { userLoginReducer } from "./authReducers";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

export default rootReducer;
