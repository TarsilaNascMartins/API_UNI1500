import axios from "axios";

const API = axios.create({

    baseURL: 'https://localhost:7138/api'

})

export default API;