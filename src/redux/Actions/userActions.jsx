import {
    LOGIN_ADD_REQUEST,
    LOGIN_ADD_SUCCESS,
    LOGIN_ADD_FAIL,
    SIGNUP_ADD_REQUEST,
    SIGNUP_ADD_SUCCESS,
    SIGNUP_ADD_FAIL
} from "../Constants/userConstants";

import jwtInterceptor from "./jwtInterceptor";
import { SERVER_IP } from "../../config.js/env";

export const userLogin = (login) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_ADD_REQUEST,
            Accept: "application/json",
        });

        const { data } = await jwtInterceptor.post(
            `${SERVER_IP}/api/v1/client/login`,
            login
        );
        dispatch({
            type: LOGIN_ADD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_ADD_FAIL,
            payload: error.response && error.response.data.error,
        });
    }
};


export const userSignUp = (signUpData) => async (dispatch) => {
    console.log({ signUpData });
    try {
        dispatch({
            type: SIGNUP_ADD_REQUEST,
            Accept: "application/json",
        });

        const { data } = await jwtInterceptor.post(
            `${SERVER_IP}/api/v1/client/create`,
            signUpData
        );
        console.log({ data });
        dispatch({
            type: SIGNUP_ADD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SIGNUP_ADD_FAIL,
            payload: error.response && error.response.data.error,
        });
    }
};