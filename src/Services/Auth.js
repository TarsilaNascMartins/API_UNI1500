export const TokenKey = "TOKEN"

export const setToken = (token) =>{
    localStorage.setItem(TokenKey,JSON.stringify(token));
}

export const getToken = () => {
   return JSON.parse(localStorage.getItem(TokenKey));
}

export const logout = ()=> {
    return JSON.parse(localStorage.removeItem(TokenKey));
}