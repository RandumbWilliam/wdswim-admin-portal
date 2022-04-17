import { ADD_SWIM_LEVELS, GET_SWIM_LEVELS } from "../../constants/actionTypes";

const swimLevelsReducer = (swimLevelsData = [], action) => {
    switch (action.type) {
        case ADD_SWIM_LEVELS:
            return [...swimLevelsData, action.payload];
        case GET_SWIM_LEVELS:
            return action.payload;
        default:
            return swimLevelsData;
    }
};

export default swimLevelsReducer;
