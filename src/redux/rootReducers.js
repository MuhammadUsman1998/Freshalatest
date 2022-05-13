import { combineReducers } from "redux";

import { addSignUpReducers, addLoginReducers } from "./Reducers/userReducers";
import { getServiceReducers } from "./Reducers/serviceReducers";
import { getStaffReducers } from "./Reducers/staffReducers";

export const rootReducer = combineReducers({
  userLogin: addLoginReducers,

  userSignUp: addSignUpReducers,

  getService: getServiceReducers,

  getStaff: getStaffReducers,
});
