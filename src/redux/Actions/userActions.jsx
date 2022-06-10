import {
    LOGIN_ADD_REQUEST,
    LOGIN_ADD_SUCCESS,
    LOGIN_ADD_FAIL,
    SIGNUP_ADD_REQUEST,
    SIGNUP_ADD_SUCCESS,
    SIGNUP_ADD_FAIL,
    ORDER_ADD_REQUEST,
    ORDER_ADD_SUCCESS,
    ORDER_ADD_FAIL,
} from "../Constants/userConstants";

import jwtInterceptor from "./jwtInterceptor";
import { SERVER_IP } from "../../config.js/env";

export const userLogin = (login, branchId) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_ADD_REQUEST,
            Accept: "application/json",
        });
        const { data } = await jwtInterceptor.post(
            `${SERVER_IP}/api/v1/client/login/${branchId}`,
            login
        );
        dispatch({
            type: LOGIN_ADD_SUCCESS,
            payload: data,
        });


        localStorage.setItem("user", JSON.stringify(data?.data));
        localStorage.setItem("accessToken", data?.data?.token);
    } catch (error) {
        dispatch({
            type: LOGIN_ADD_FAIL,
            payload: error.response && error.response.data,
        });
    }
};


export const userSignUp = (signUpData) => async (dispatch) => {

    try {
        dispatch({
            type: SIGNUP_ADD_REQUEST,
            Accept: "application/json",
        });

        const { data } = await jwtInterceptor.post(
            `${SERVER_IP}/api/v1/client/create`,
            signUpData
        );

        // if (!data.error) {
        dispatch({
            type: SIGNUP_ADD_SUCCESS,
            payload: data,
        });

        // } else {
        // dispatch({
        //     type: SIGNUP_ADD_FAIL,
        //     payload: data
        // });

    }
    catch (error) {
        dispatch({
            type: SIGNUP_ADD_FAIL,
            payload: error.response && error.response.data,
        });
    }
};


export const orderCreation = (order) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_ADD_REQUEST,
            Accept: "application/json",
        });
        const { data } = await jwtInterceptor.post(
            `${SERVER_IP}/api/v1/order/create`,
            order
        );
        dispatch({
            type: ORDER_ADD_SUCCESS,
            payload: data,
        });


        localStorage.setItem("user", JSON.stringify(data.data));
    } catch (error) {
        dispatch({
            type: ORDER_ADD_FAIL,
            payload: error.response && error.response.data.error,
        });
    }
};