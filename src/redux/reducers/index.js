import { combineReducers } from "redux";
import myProfileReducer from "./myProfileReducer";

const rootReducer = combineReducers({
  myProfileReducer,
});

export default rootReducer;
