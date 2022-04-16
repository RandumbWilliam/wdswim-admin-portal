import { ADD_DISCOUNTS, GET_DISCOUNTS } from "../../constants/actionTypes";

const discountsReducer = (discountsData = [], action) => {
    switch (action.type) {
        case ADD_DISCOUNTS:
            return [...discountsData, action.payload];
        case GET_DISCOUNTS:
            return action.payload;
        default:
            return discountsData;
    }
};

export default discountsReducer;
