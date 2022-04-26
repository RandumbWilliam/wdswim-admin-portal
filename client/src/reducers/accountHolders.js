import { ADD_ACCOUNT_HOLDERS, GET_ACCOUNT_HOLDERS, GET_ONE_ACCOUNT_HOLDERS } from "../constants/actionTypes";

const accountHoldersReducer = (accountHoldersData = [], action) => {
    switch (action.type) {
        case ADD_ACCOUNT_HOLDERS:
            return [...accountHoldersData, action.payload];
        case GET_ONE_ACCOUNT_HOLDERS:
            return [...accountHoldersData, action.payload];
        case GET_ACCOUNT_HOLDERS:
            return action.payload;
        default:
            return accountHoldersData;
    }
};

export default accountHoldersReducer;
