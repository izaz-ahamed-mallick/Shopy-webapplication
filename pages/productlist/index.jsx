"use client";

import { product } from "@/api/axios/axios";
import {
    useGetProductList,
    useRemoveProduct,
} from "@/hooks/customHooks/Product.hook";
import Link from "next/link";
import RemoveButton from "@/pages/productlist/RemoveButton";
import Loader from "@/Utils/Loader";
import Swetalert from "../Component/Swetalert"; // Import the Swetalert function
import bgImage from "../../public/Images/bg3.jpeg";
import Image from "next/image";

const ProductsList = () => {
    const { data, error, isLoading } = useGetProductList();
    const { mutate } = useRemoveProduct();

    if (isLoading) return <Loader />;
    if (error)
        return (
            <div className="text-center text-red-600">
                Error loading products
            </div>
        );

    const products = data?.data.data;

    const handleRemoveClick = (id) => {
        Swetalert(id, (id) => {
            mutate(id);
        });
    };

    return (
        products && (
            <div className="relative min-h-screen flex flex-col">
                <div className="absolute inset-0">
                    <Image
                        fill
                        priority
                        src={bgImage}
                        alt="Background"
                        className="absolute inset-0 object-cover filter blur-sm"
                    />
                </div>
                <div className="relative flex-grow container mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Product List
                    </h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Index
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Image
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Description
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {products.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="text-center py-4 text-gray-500"
                                        >
                                            No Products
                                        </td>
                                    </tr>
                                ) : (
                                    products.map((item, index) => (
                                        <tr key={item._id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap ">
                                                <Link
                                                    href={`/details/${item._id}`}
                                                >
                                                    <Image
                                                        src={
                                                            item?.image &&
                                                            product(item?.image)
                                                        }
                                                        alt="Product Image"
                                                        width={64}
                                                        height={64}
                                                        style={{
                                                            width: "auto",
                                                            height: "auto",
                                                            objectFit: "cover",
                                                        }}
                                                        className="rounded"
                                                    />
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <Link
                                                    href={`/details/${item._id}`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <RemoveButton
                                                        id={item._id}
                                                        handleRemoveClick={
                                                            handleRemoveClick
                                                        }
                                                    />
                                                    <Link
                                                        href={`/update/${item._id}`}
                                                    >
                                                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-3 py-1 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition">
                                                            Update
                                                        </button>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProductsList;
