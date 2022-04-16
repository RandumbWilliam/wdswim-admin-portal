import { GET_SEASONS, ADD_SEASONS } from "../constants/actionTypes";

const seasonsReducer = (seasonsData = [], action) => {
    switch (action.type) {
        case GET_SEASONS:
            return action.payload;
        case ADD_SEASONS:
            return [...seasonsData, action.payload];
        default:
            return seasonsData;
    }
};

export default seasonsReducer;
