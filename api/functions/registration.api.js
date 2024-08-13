import React from "react";
import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

const registration = async (data) => {
    try {
        const res = await axiosInstance.post(endPoints.auth.signUp, data);

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default registration;
