import { GET_CLASSES , ADD_CLASSES} from "../constants/actionTypes";
import * as api from "../api";

export const getClasses = () => async (dispatch) => {
    try {
        const { data } = await api.getClasses();

        dispatch({ type: GET_CLASSES, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const addClasses = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addClasses(formData);

        dispatch({ type: ADD_CLASSES, payload: data });
    } catch (error) {
        console.log(error);
    }
};