import {
    SERVICE_GET_REQUEST,
    SERVICE_GET_SUCCESS,
    SERVICE_GET_FAIL,

} from "../Constants/serviceConstants";

import jwtInterceptor from "./jwtInterceptor";
import { SERVER_IP } from "../../config.js/env";

export const getService = (branchId, salonId) => async (dispatch) => {
    // if (search === undefined) {
    //     search = "";
    // }
    // if (status === undefined) {
    //     status = "";
    // }
    try {
        dispatch({
            type: SERVICE_GET_REQUEST,
            // Accept: "application/json",
        });

        const url = `${SERVER_IP}/api/v1/online-booking/details?branchId=${branchId}&salonId=${salonId}`
        const { data } = await jwtInterceptor.get(url);

        dispatch({
            type: SERVICE_GET_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SERVICE_GET_FAIL,
            payload: error.response && error.response.data.error,
        });
    }
};
