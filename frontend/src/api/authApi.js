import API from "./axiosInstance";

export const registerUser = (userData) =>
    API.post("/auth/register", userData);