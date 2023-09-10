import { Axios } from "axios";

const serverURL = import.meta.env.VITE_SERVER_URL as string || "http://localhost:5000";
const baseURL = `${serverURL}/api`;

const axios = new Axios({
    baseURL,
    withCredentials: true,
});

export default axios;