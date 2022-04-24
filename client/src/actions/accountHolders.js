import { ADD_ACCOUNT_HOLDERS, GET_ACCOUNT_HOLDERS, GET_ONE_ACCOUNT_HOLDERS } from "../constants/actionTypes";
import * as api from "../api";

export const addAccountHolders = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addAccountHolders(formData);

        dispatch({ type: ADD_ACCOUNT_HOLDERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getAccountHolder = () => async (dispatch) => {
    try {
        const { data } = await api.getAccountHolder();

        dispatch({ type: GET_ACCOUNT_HOLDERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getOneAccountHolder = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.getOneAccountHolder(formData);

        console.log(data)

        dispatch({ type: GET_ONE_ACCOUNT_HOLDERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};