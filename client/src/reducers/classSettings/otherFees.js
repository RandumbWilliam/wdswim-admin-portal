import { ADD_OTHER_FEES, GET_OTHER_FEES } from "../../constants/actionTypes";

const otherFeesReducer = (otherFeesData = [], action) => {
    switch (action.type) {
        case ADD_OTHER_FEES:
            return [...otherFeesData, action.payload];
        case GET_OTHER_FEES:
            return action.payload;
        default:
            return otherFeesData;
    }
};

export default otherFeesReducer;
