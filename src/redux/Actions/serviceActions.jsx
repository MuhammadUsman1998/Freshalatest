import {
    SERVICE_GET_REQUEST,
    SERVICE_GET_SUCCESS,
    SERVICE_GET_FAIL,

} from "../Constants/serviceConstants";

import jwtInterceptor from "./jwtInterceptor";
import { SERVER_IP } from "../../config.js/env";

export const getService = ({ branchId, userId, salonId }) => async (dispatch) => {
    // if (search === undefined) {
    //     search = "";
    // }
    // if (status === undefined) {
    //     status = "";
    // }

    try {
        dispatch({
            type: SERVICE_GET_REQUEST,
            Accept: "application/json",
        });

        const { data } = await jwtInterceptor.get(
            `${SERVER_IP}/api/v1/online-booking/details?branchId=${branchId}&userId=${userId}&salonId=${salonId}`);


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
