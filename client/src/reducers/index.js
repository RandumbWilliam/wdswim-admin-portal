import { combineReducers } from "redux";
import auth from "./auth";
import users from "./users";
import classes from "./classes";
import seasons from "./seasons";
import discounts from "./classSettings/discounts";
import locations from "./locations";
import campus from "./campus";

export const reducers = combineReducers({ auth, users, classes, seasons, discounts, locations, campus});
