import axios from "axios"

const instance = axios.create({
    //baseURL: "http://localhost:3001",
    baseURL: "https://pr5apiserver-4k0d.onrender.com/"

})

export default instance