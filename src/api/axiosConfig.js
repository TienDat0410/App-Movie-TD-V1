import axios from "axios";


export default axios.create({
    baseURL:"http://localhost:8080",
    // baseURL: "https://moviestdapi-production.up.railway.app",
});