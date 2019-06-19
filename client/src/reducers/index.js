import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  post: postReducer
});

export default rootReducer;
