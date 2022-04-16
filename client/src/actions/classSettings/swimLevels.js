import { ADD_SWIM_LEVELS, GET_SWIM_LEVELS } from "../../constants/actionTypes";
import * as api from "../../api";

export const addSwimLevels = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addSwimLevels(formData);

        dispatch({ type: ADD_SWIM_LEVELS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getSwimLevels = () => async (dispatch) => {
    try {
        const { data } = await api.getSwimLevels();

        dispatch({ type: GET_SWIM_LEVELS, payload: data });
    } catch (error) {
        console.log(error);
    }
};


