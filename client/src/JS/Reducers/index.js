import { combineReducers } from "redux";
import teamReducer from "./team";
import adminReducer from "./admin";


const rootReducer = combineReducers({ teamReducer, adminReducer });

export default rootReducer;
