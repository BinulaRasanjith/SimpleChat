import axios from "./api";

const login = async (username: string, password: string) => {
    return await axios.post("/auth/login", { username, password });
};

const logout = async () => {
    return await axios.post("/auth/logout");
};

const signup = async (username: string, password: string) => {
    return await axios.post("/auth/signup", { username, password });
};

const checkUsername = async (username: string) => {
    return await axios.get(`/auth/check-username/${username}`);
};

const auth = {
    login,
    logout,
    signup,
    checkUsername,
};

export default auth;