import { ADD_CAMPUS, GET_CAMPUS } from "../constants/actionTypes";
import * as api from "../api";

export const addCampus = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addCampus(formData);

        dispatch({ type: ADD_CAMPUS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getCampus = () => async (dispatch) => {
    try {
        const { data } = await api.getCampus();

        dispatch({ type: GET_CAMPUS, payload: data });
    } catch (error) {
        console.log(error);
    }
};


