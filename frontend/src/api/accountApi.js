import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const createGeneralAccount = (accountData) => {
    return API.post(
        "/accounts/general",
        accountData
    );
};

export const createCreditAccount = (accountData) => {
    return API.post(
        "/accounts/credit",
        accountData
    );
};