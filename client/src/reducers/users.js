import { ADD_ADMIN, GET_ADMIN } from "../constants/actionTypes";

const usersReducer = (adminData = [], action) => {
    switch (action.type) {
        case ADD_ADMIN:
            return [...adminData, action.payload];
        case GET_ADMIN:
            return action.payload;
        default:
            return adminData;
    }
};

export default usersReducer;
