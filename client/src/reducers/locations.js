import { ADD_LOCATIONS, GET_LOCATIONS , GET_CAMPUS} from "../constants/actionTypes";

const locationsReducer = (locationsData = [], action) => {
    switch (action.type) {
        case ADD_LOCATIONS:
            return [...locationsData, action.payload];
        case GET_LOCATIONS:
            return action.payload;
        case GET_CAMPUS:
            return action.payload;
        default:
            return locationsData;
    }
};

export default locationsReducer;
