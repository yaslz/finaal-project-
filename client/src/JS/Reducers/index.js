import { combineReducers } from "redux";
import teamReducer from "./team";

const rootReducer = combineReducers({ teamReducer });

export default rootReducer;
