import axios from "axios";

const API = axios.create ( {

baseUrl : 'http://localhost:5000/api'

})

export default API;