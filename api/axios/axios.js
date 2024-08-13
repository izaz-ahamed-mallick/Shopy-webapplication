import axios from "axios";
import { Cookies } from "react-cookie";
let adminUrl = "https://wtsacademy.dedicateddevelopers.us/api";

export const baseURL = adminUrl;
let axiosInstance = axios.create({
    baseURL,
});

const cookie = new Cookies();

export { adminUrl };
export const product = (media) => {
    return `https://wtsacademy.dedicateddevelopers.us/uploads/product/${media}`;
};

export const profile_pic = (media) => {
    return `https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${media}`;
};
axiosInstance.interceptors.request.use(
    async function (config) {
        const token = cookie.get("token");
        if (token !== null || token !== undefined) {
            config.headers["x-access-token"] = token;
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

export default axiosInstance;
