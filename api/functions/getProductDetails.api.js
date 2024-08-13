import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const getProductDetails = async (id) => {
    try {
        const res = await axiosInstance.get(
            endPoints.products.productDetails + id
        );

        return res.data;
    } catch (error) {
        console.log(error.message);
    }
};
