import { combineReducers } from "redux";
import teamReducer from "./team";
import adminReducer from "./admin";
import userReducer from "./user";


const rootReducer = combineReducers({ teamReducer, adminReducer, userReducer });

export default rootReducer;

