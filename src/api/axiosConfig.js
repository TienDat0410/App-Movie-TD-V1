import axios from "axios";


// export default axios.create({
//     baseURL:"http://localhost:8080",
//     //use when deploy in domain
//     // baseURL: "https://moviestdapi-production.up.railway.app",
// });

const apiConfig = {
    baseURL:"http://localhost:8080",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;