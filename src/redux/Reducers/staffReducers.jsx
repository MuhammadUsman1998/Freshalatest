import {
    STAFF_GET_REQUEST,
    STAFF_GET_SUCCESS,
    STAFF_GET_FAIL
} from "../Constants/staffConstants";

export const getStaffReducers = (state = {}, action) => {
    switch (action.type) {
        case STAFF_GET_REQUEST:
            return { loading: true };
        case STAFF_GET_SUCCESS:
            return { loading: false, Staff: action.payload };
        case STAFF_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};