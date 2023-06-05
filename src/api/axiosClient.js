import apiConfig from './axiosConfig';
import axios from 'axios';
import queryString from 'query-string';


const axiosClient = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
});
axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        console.log(response);
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient;