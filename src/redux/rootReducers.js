import { combineReducers } from "redux";

import {
  addSignUpReducers,
  addLoginReducers,
  addOrderCreation,
} from "./Reducers/userReducers";
import { getServiceReducers } from "./Reducers/serviceReducers";
import { getStaffReducers } from "./Reducers/staffReducers";

export const rootReducer = combineReducers({
  userLogin: addLoginReducers,

  userSignUp: addSignUpReducers,

  orderCreation: addOrderCreation,

  getService: getServiceReducers,

  getStaff: getStaffReducers,
});
