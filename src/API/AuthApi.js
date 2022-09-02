import API from "./HttpClient";

export const login = async(user) =>{
    return await API .post('/User/Login', user);
}

export const register = async(user) =>{
    return await API .post('/User/Create', user);
}