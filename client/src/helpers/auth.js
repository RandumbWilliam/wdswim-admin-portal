import { TOKEN, USER } from "../constants/keys";
import { getCookie, setCookie } from "./cookies";
import { getLocalStorage, setLocalStorage } from "./localstorage";

export const setAuthentication = (token, user) => {
    setCookie(TOKEN, token);
    setLocalStorage(USER, user);
};

export const isAuthenticated = () => {
    if (getCookie(TOKEN) && getLocalStorage(USER)) {
        return getLocalStorage(USER);
    }
    return false;
};
