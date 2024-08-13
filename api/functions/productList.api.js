import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const getProduct = async () => {
    try {
        const res = await axiosInstance.post(endPoints.products.productList);
        return res;
    } catch (error) {
        console.log(error.message);
    }
};
