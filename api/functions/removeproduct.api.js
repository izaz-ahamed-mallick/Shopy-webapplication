import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

const removeProduct = async (data) => {
    try {
        const res = await axiosInstance.post(endPoints.products.removeProduct, {
            id: data,
        });

        return res;
    } catch (error) {
        console.log(error.message);
    }
};

export default removeProduct;
