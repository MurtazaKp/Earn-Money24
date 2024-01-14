import axios from "axios";

const baseUrl = "https://unrise-admin-backend.onrender.com";

export const http = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

http.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer sometoken`;
        return config;
    },
    (err) => {
        throw new Error(err);
        // some action 
    }
);