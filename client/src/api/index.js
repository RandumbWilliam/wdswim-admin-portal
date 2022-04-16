import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }

    return req;
});

export const login = (formData) => API.post("/auth/login", formData);

export const addAdminAccount = (formData) => API.post("/users/addAdminAccount", formData);

export const getAdminAccount = () => API.get("/users/getAdminAccount");

export const getClasses = () => API.get("/classes/getClasses");

export const addClasses = (formData) => API.post("/users/addClasses", formData);

export const getSeasons = () => API.get("/seasons/getSeasons");

export const addSeasons = () => API.get("/seasons/addSeasons");

export const addDiscounts = (formData) => API.post("/classSettings/discounts/addDiscounts", formData);

export const getDiscounts = () => API.get("/classSettings/discounts/getDiscounts");

export const getLessonType = (formData) => API.post("/classSettings/lessonType/getLessonType", formData);

export const addLessonType = () => API.get("/classSettings/lessonType/addLessonType");

export const addAccountHolders = (formData) => API.post("/accountHolder/addAccountHolders", formData);

export const getAccountHolder = () => API.get("/accountHolder/getAccountHolder");

export const addLocations = (formData) => API.post("/locations/addLocations", formData);

export const getLocations = () => API.get("/locations/getLocations");

export const addOtherFees = (formData) => API.post("/classSettings/otherFees/addOtherFees", formData);

export const getOtherFees = () => API.get("/classSettings/otherFees/getOtherFees");

export const addStudents = (formData) => API.post("/students/addStudents", formData);

export const getStudents = () => API.get("/students/getStudents");

export const addSwimLevels = (formData) => API.post("/classSettings/swimLevels/addSwimLevels", formData);

export const getSwimLevels = () => API.get("/classSettings/swimLevels/getSwimLevels");

export const addCampus = (formData) => API.post("/campus/addCampus", formData);

export const getCampus = () => API.get("/campus/getCampus");