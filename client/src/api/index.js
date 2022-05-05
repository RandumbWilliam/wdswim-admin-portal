import axios from "axios";
import { getCookie } from "../helpers/cookies";
import { TOKEN } from "../constants/keys"

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
        req.headers.Authorization = `Bearer ${
            getCookie(TOKEN)
        }`;
    }

    return req;
});

export const login = (formData) => API.post("/auth/login", formData);

// ADMINACCOUNT
export const addAdminAccount = (formData) => API.post("/users/addAdminAccount", formData);
export const getAdminAccount = () => API.get("/users/getAdminAccount");

// CLASSES
export const getClasses = () => API.get("/classes/getClasses");
export const addClasses = (formData) => API.post("/users/addClasses", formData);

// SEASONS
export const getSeasons = () => API.get("/seasons/getSeasons");
export const addSeasons = () => API.get("/seasons/addSeasons");

// DISCOUNTS
export const addDiscounts = (formData) => API.post("/classSettings/discounts/addDiscounts", formData);
export const getDiscounts = () => API.get("/classSettings/discounts/getDiscounts");

// LESSON TYPES
export const addLessonType = (formData) => API.post("/classSettings/lessonType/addLessonType", formData);
export const getLessonType = () => API.get("/classSettings/lessonType/getLessonType");

// ACCOUNT HOLDERS
export const addAccountHolders = (formData) => API.post("/accountHolders/addAccountHolders", formData);
export const getOneAccountHolder = (formData) => API.post("/accountHolders/getOneAccountHolder", formData);
export const getAccountHolder = () => API.get("/accountHolders/getAccountHolder");

// LOCATIONS
export const addLocations = (formData) => API.post("/locations/addLocations", formData);
export const getLocations = () => API.get("/locations/getLocations");

// OTHER FEES
export const addOtherFees = (formData) => API.post("/classSettings/otherFees/addOtherFees", formData);
export const getOtherFees = () => API.get("/classSettings/otherFees/getOtherFees");

// STUDENTS
export const addStudents = (formData) => API.post("/students/addStudents", formData);
export const getStudents = () => API.get("/students/getStudents");

// SWIM LEVELS
export const addSwimLevels = (formData) => API.post("/classSettings/swimLevels/addSwimLevels", formData);
export const getSwimLevels = () => API.get("/classSettings/swimLevels/getSwimLevels");

// CAMPUS
export const addCampus = (formData) => API.post("/campus/addCampus", formData);
export const getCampus = () => API.get("/campus/getCampus");
