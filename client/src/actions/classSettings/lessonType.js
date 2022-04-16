import { ADD_LESSON_TYPE, GET_LESSON_TYPE } from "../../constants/actionTypes";
import * as api from "../../api";

export const addLessonType = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.addLessonType(formData);

        dispatch({ type: ADD_LESSON_TYPE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getLessonType = () => async (dispatch) => {
    try {
        const { data } = await api.getLessonType();

        dispatch({ type: GET_LESSON_TYPE, payload: data });
    } catch (error) {
        console.log(error);
    }
};


