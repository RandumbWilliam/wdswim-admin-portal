import { GET_CLASSES } from "../constants/actionTypes";
import * as api from "../api";

export const getClasses = () => async (dispatch) => {
    try {
        const { data } = await api.getClasses();

        dispatch({ type: GET_CLASSES, payload: data });
    } catch (error) {
        console.log(error);
    }
};
