import { ADD_CAMPUS, GET_CAMPUS } from "../constants/actionTypes";

const campusReducer = (campusData = [], action) => {
    switch (action.type) {
        case ADD_CAMPUS:
            return [...campusData, action.payload];
        case GET_CAMPUS:
            return action.payload;
        default:
            return campusData;
    }
};

export default campusReducer;
