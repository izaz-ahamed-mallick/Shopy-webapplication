import { profile_pic } from "@/api/axios/axios";
import { useProfileDetails } from "@/hooks/customHooks/profile.hook";
import Loader from "@/Utils/Loader";
import Link from "next/link";
import React from "react";

const ProfileDetails = () => {
    const { data, isLoading, isError } = useProfileDetails();

    if (isLoading) return <Loader />;
    if (isError)
        return (
            <p className="text-center text-red-600">Error loading profile</p>
        );

    return (
        <div className="mt-6 p-4 bg-gray-100 min-h-screen">
            <Link
                className="m-4 text-blue-600 underline hover:text-blue-800"
                href={"/productlist"}
            >
                &larr; Back to Product List
            </Link>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:w-48">
                        <img
                            className="w-full h-48 object-cover md:h-full md:w-full"
                            src={profile_pic(data.data.profile_pic)}
                            alt={`${data.data.first_name}'s profile`}
                        />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">
                            {data.data.first_name + " " + data.data.last_name}
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">
                            {data.data.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
