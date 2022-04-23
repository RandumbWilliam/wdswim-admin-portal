import { GET_STUDENTS, ADD_STUDENTS } from "../constants/actionTypes";
import * as api from "../api";

export const addStudents = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addStudents(formData);

        dispatch({ type: ADD_STUDENTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getStudents = () => async (dispatch) => {
    try {
        const { data } = await api.getStudents();

        dispatch({ type: GET_STUDENTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

