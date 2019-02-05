import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";
import service_types from "./service_types";

export default combineReducers({ auth, users,service_types });
