import React from "react";
import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

const profileDetails = async () => {
    try {
        const res = await axiosInstance.get(endPoints.profile.details);
        return res.data;
    } catch (error) {
        console.log(error.message);
    }
};

export default profileDetails;
