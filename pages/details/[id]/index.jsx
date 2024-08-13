import { product } from "@/api/axios/axios";
import { useProductDetails } from "@/hooks/customHooks/Product.hook";
import Loader from "@/Utils/Loader";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Details = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: productdetails, isLoading } = useProductDetails(id);

    if (isLoading) return <Loader />;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Link
                className="inline-block border border-gray-300 px-4 py-2 rounded-md text-blue-600 hover:bg-blue-100 transition"
                href="/productlist"
            >
                Back
            </Link>
            <div className="flex flex-col lg:flex-row gap-6 mt-6 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="relative flex-shrink-0 w-full max-w-md h-80 rounded-2xl overflow-hidden">
                    <Image
                        priority
                        src={product(productdetails.data.image)}
                        alt={productdetails.data.title}
                        fill
                        sizes="auto"
                        className="object-cover"
                    />
                </div>
                <div className="flex-grow mt-4 lg:mt-0">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-4">
                        {productdetails.data.title}
                    </h1>
                    <p className="text-lg text-gray-700">
                        {productdetails.data.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;
