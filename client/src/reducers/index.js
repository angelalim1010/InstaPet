import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  error: errorReducer
});

export default rootReducer;
