import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const login = async (payload) => {
    try {
        const response = await axiosInstance.post(
            endPoints.auth.signIn,
            payload
        );
        return response?.data;
    } catch (error) {
        console.log("Contact Form error", error);
    }
};
