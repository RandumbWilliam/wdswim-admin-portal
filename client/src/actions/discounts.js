import { ADD_DISCOUNTS, GET_DISCOUNTS } from "../constants/actionTypes";
import * as api from "../api";

export const addDiscounts = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addDiscounts(formData);

        dispatch({ type: ADD_DISCOUNTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getDiscounts = () => async (dispatch) => {
    try {
        const { data } = await api.getDiscounts();

        dispatch({ type: GET_DISCOUNTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};


