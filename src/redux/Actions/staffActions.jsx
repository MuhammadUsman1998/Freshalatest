import {
    STAFF_GET_REQUEST,
    STAFF_GET_SUCCESS,
    STAFF_GET_FAIL,
} from "../Constants/staffConstants";


import jwtInterceptor from "./jwtInterceptor";
import { SERVER_IP } from "../../config.js/env";

export const getStaff = ({ branchId, isActive }) => async (dispatch) => {

    try {
        dispatch({
            type: STAFF_GET_REQUEST,
            Accept: "application/json",
        });

        const { data } = await jwtInterceptor.get(
            `${SERVER_IP}/api/v1/beautician/all/${branchId}?isActive=${isActive}`
        );

        dispatch({
            type: STAFF_GET_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: STAFF_GET_FAIL,
            payload: error.response && error.response.data.error,
        });
    }
};