import { ADD_LESSON_TYPE, GET_LESSON_TYPE } from "../../constants/actionTypes";

const lessonTypeReducer = (lessonTypeData = [], action) => {
    switch (action.type) {
        case ADD_LESSON_TYPE:
            return [...lessonTypeData, action.payload];
        case GET_LESSON_TYPE:
            return action.payload;
        default:
            return lessonTypeData;
    }
};

export default lessonTypeReducer;
