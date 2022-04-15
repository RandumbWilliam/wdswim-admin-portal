import { ADD_SEASONS, GET_SEASONS } from "../constants/actionTypes";
import * as api from "../api";

export const addSeasons = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addSeasons(formData);

        dispatch({ type: ADD_SEASONS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getSeasons = () => async (dispatch) => {
    try {
        const { data } = await api.getSeasons();

        dispatch({ type: GET_SEASONS, payload: data });
    } catch (error) {
        console.log(error);
    }
};


