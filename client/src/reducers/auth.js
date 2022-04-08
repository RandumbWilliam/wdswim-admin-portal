import { AUTH, LOGOUT, ERROR, REMOVE_ERROR } from "../constants/actionTypes";
import { setAuthentication } from "../helpers/auth";

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            const user = action?.data.result;
            const token = action?.data.token;

            setAuthentication(token, user);
            return { ...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear();

            return { ...state, authData: null };
        case ERROR:
            return { ...state, authData: action?.data };
        case REMOVE_ERROR:
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;
