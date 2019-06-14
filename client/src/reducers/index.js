import { combineReducers } from "redux";
import homePageReducer from "./homePageReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  homePage: homePageReducer,
  user: userReducer,
  post: postReducer
});

export default rootReducer;
