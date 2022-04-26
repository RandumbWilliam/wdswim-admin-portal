import { AUTH, ERROR, AUTH_LOADING } from "../constants/actionTypes";
import * as api from "../api";
import { isAuthenticated } from "../helpers/auth";

export const login = (formData, navigate) => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
        const { data } = await api.login(formData);

        dispatch({ type: AUTH, data });

        if (isAuthenticated()) {
            navigate("/");
        } else {
            console.log("nothing");
        }
    } catch (error) {
        dispatch({ type: ERROR, message: error?.response?.data?.message });
    }
};
