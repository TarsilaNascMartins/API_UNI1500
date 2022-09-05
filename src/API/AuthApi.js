import API from "./HttpClient";

export const login = async (user) => {
    return await API.post('/Users/Login', user);
}

export const register = async (user) => {
    return await API.post('/Users/Create', user);
}