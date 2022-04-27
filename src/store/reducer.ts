import { combineReducers } from "redux";
import { reducer as industries } from "./industries";

const reducers = {
  industries,
};

export const appReducer = combineReducers(reducers);
