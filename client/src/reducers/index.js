import { combineReducers } from "redux";
import homePageReducer from "./homePageReducer";

const rootReducer = combineReducers({
    homePage: homePageReducer
});

export default rootReducer;
