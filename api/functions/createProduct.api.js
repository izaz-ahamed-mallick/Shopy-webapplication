import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

const createProduct = async (data) => {
    try {
        const res = await axiosInstance.post(
            endPoints.products.createProduct,
            data
        );
        return res;
    } catch (error) {
        console.log(error.message);
    }
};

export default createProduct;
