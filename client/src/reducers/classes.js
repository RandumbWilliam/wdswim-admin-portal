import { ADD_CLASSES, GET_CLASSES, GET_SEASONS } from "../constants/actionTypes";

const classesReducer = (classesData = [], action) => {
    switch (action.type) {
        case GET_CLASSES:
            return action.payload;
        case ADD_CLASSES:
            return [...classesData, action.payload];
        case GET_SEASONS:
            return action.payload;  
        default:
            return classesData;
    }
};

export default classesReducer;
