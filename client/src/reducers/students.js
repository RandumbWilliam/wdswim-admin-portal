import { GET_STUDENTS, ADD_STUDENTS } from "../constants/actionTypes";

const studentsReducer = (studentsData = [], action) => {
    switch (action.type) {
        case GET_STUDENTS:
            return action.payload;
        case ADD_STUDENTS:
            return [...studentsData, action.payload];
        default:
            return studentsData;
    }
};

export default studentsReducer;
