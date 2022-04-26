import {
    AUTH,
    LOGOUT,
    ERROR,
    REMOVE_ERROR,
    AUTH_LOADING,
} from "../constants/actionTypes";
import { TOKEN, USER } from "../constants/keys";
import { setAuthentication } from "../helpers/auth";
import { deleteCookie } from "../helpers/cookies";
import { deleteLocalStorage } from "../helpers/localstorage";

const authState = {
    authData: null,
    isLoading: false,
    isError: false,
    message: "",
};

const authReducer = (state = authState, action) => {
    switch (action.type) {
        case AUTH_LOADING:
            return { ...state, isLoading: true };
        case AUTH:
            const user = action?.data.result;
            const token = action?.data.token;
            setAuthentication(token, user);
            return { ...state, authData: action?.data, isLoading: false };
        case LOGOUT:
            deleteCookie(TOKEN);
            deleteLocalStorage(USER);
            return { ...state, authData: null };
        case ERROR:
            console.log(action.message);
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: action.message,
            };
        case REMOVE_ERROR:
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;
