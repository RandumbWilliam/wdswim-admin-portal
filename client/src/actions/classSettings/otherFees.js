import { ADD_OTHER_FEES, GET_OTHER_FEES } from "../../constants/actionTypes";
import * as api from "../../api";

export const addOtherFees = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addOtherFees(formData);
        console.log("hello")

        dispatch({ type: ADD_OTHER_FEES, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getOtherFees = () => async (dispatch) => {
    try {
        const { data } = await api.getOtherFees();

        dispatch({ type: GET_OTHER_FEES, payload: data });
    } catch (error) {
        console.log(error);
    }
};


