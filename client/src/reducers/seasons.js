import { GET_SEASONS } from "../constants/actionTypes";

const seasonsReducer = (seasonsData = [], action) => {
    switch (action.type) {
        case GET_SEASONS:
            return action.payload;
        default:
            return seasonsData;
    }
};

export default seasonsReducer;
