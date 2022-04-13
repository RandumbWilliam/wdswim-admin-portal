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
