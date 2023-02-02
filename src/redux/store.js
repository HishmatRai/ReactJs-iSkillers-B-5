import { createStore, applyMiddleware, combineReducers } from "redux";
import useReducer from "./reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ useReducer });
export const Store = createStore(rootReducer, applyMiddleware(thunk));
