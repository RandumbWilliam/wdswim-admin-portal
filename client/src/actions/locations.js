import { ADD_LOCATIONS, GET_LOCATIONS } from "../constants/actionTypes";
import * as api from "../api";

export const addLocations = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addLocations(formData);

        dispatch({ type: ADD_LOCATIONS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getLocations = () => async (dispatch) => {
    try {
        const { data } = await api.getLocations();

        dispatch({ type: GET_LOCATIONS, payload: data });
    } catch (error) {
        console.log(error);
    }
};


