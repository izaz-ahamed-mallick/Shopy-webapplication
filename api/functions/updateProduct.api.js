import React from "react";
import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const updateProduct = async (data) => {
    try {
        const res = await axiosInstance.post(
            endPoints.products.updateProduct,
            data
        );

        return res.data;
    } catch (error) {
        console.log(error.message);
    }
};
