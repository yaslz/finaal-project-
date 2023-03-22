import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../Reducers";
import thunk from "redux-thunk";
const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;


