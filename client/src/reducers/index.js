import { combineReducers } from "redux";
import auth from "./auth";
import users from "./users";
import classes from "./classes";

export const reducers = combineReducers({ auth, users, classes });
