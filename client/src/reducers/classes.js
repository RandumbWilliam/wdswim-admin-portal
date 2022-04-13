import { GET_CLASSES } from "../constants/actionTypes";

const classesReducer = (classesData = [], action) => {
    switch (action.type) {
        case GET_CLASSES:
            return action.payload;
        default:
            return classesData;
    }
};

export default classesReducer;
