import React from "react";
import Image from "next/image";
import loadingImg from "@/public/load.gif"; // Ensure this path is correct

const Loader = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Image
                priority
                src={loadingImg}
                alt="Loading"
                width={100} // Adjust as needed
                height={100} // Adjust as needed
                className="h-full"
            />
        </div>
    );
};

export default Loader;
