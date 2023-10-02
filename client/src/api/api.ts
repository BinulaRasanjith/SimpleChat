import axios from "axios";

const serverURL = import.meta.env.VITE_SERVER_URL as string || "http://localhost:5001";
const baseURL = `${serverURL}/api`;

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;