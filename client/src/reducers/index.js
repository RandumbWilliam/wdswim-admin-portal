import { combineReducers } from "redux";
import auth from "./auth";
import users from "./users";
import classes from "./classes";
import seasons from "./seasons";
import discounts from "./classSettings/discounts";
import locations from "./locations";
import campus from "./campus";
import accountHolders from "./accountHolders";
import swimLevels from "./classSettings/swimLevels";
import lessonType from "./classSettings/lessonType";
import otherFees from "./classSettings/otherFees.js";
import students from "./students.js";

export const reducers = combineReducers({ auth, users, classes, seasons, discounts, locations, campus, 
    swimLevels, lessonType, accountHolders, otherFees, students});
