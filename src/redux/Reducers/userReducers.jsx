import {
    LOGIN_ADD_REQUEST,
    LOGIN_ADD_SUCCESS,
    LOGIN_ADD_FAIL,
    LOGIN_ADD_RESET,
    SIGNUP_ADD_REQUEST,
    SIGNUP_ADD_SUCCESS,
    SIGNUP_ADD_FAIL,
    SIGNUP_ADD_RESET,
    ORDER_ADD_REQUEST,
    ORDER_ADD_SUCCESS,
    ORDER_ADD_FAIL
} from "../Constants/userConstants";

export const addLoginReducers = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_ADD_REQUEST:
            return { loading: true };
        case LOGIN_ADD_SUCCESS:
            return { loading: false, Login: action.payload };
        case LOGIN_ADD_FAIL:
            return { loading: false, error: action.payload };
        case LOGIN_ADD_RESET:
            return { loading: false, error: false, success: false, Login: {} }
        default:
            return state;
    }
};


export const addSignUpReducers = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_ADD_REQUEST:
            return { loading: true };
        case SIGNUP_ADD_SUCCESS:
            return { loading: false, SignUp: action.payload };
        case SIGNUP_ADD_FAIL:
            return { loading: false, error: action.payload };
        case SIGNUP_ADD_RESET:
            return { loading: false, error: false, success: false, SignUp: {} }
        default:
            return state;
    }
};

export const addOrderCreation = (state = {}, action) => {
    switch (action.type) {
        case ORDER_ADD_REQUEST:
            return { loading: true };
        case ORDER_ADD_SUCCESS:
            return { loading: false, SignUp: action.payload };
        case ORDER_ADD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};