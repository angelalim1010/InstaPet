import { combineReducers } from "redux";
import homePageReducer from "./homePageReducer";

const rootReducer = combineReducers({
    homePageReducer: homePageReducer,
});

export default rootReducer;
