import axios from "axios"

const instance = axios.create({
    //baseURL: "http://localhost:3001",
    baseURL: "https://ipp5-server.onrender.com"

})

export default instance