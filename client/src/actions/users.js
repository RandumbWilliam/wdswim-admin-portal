import { ADD_ADMIN, GET_ADMIN } from "../constants/actionTypes";
import * as api from "../api";

export const addAdminAccount = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addAdminAccount(formData);

        dispatch({ type: ADD_ADMIN, data });
    } catch (error) {
        console.log(error);
    }
};

export const getAdminAccount = () => async (dispatch) => {
    try {
        const { data } = await api.getAdminAccount();

        dispatch({ type: GET_ADMIN, payload: data });
    } catch (error) {
        console.log(error);
    }
};
