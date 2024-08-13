"use client";

import { product } from "@/api/axios/axios";
import { useProductDetails, useUpdate } from "@/hooks/customHooks/Product.hook";
import Loader from "@/Utils/Loader";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, isError, isLoading } = useProductDetails(id);
    const { mutate, isPending } = useUpdate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const [img, setImg] = useState(null);

    useEffect(() => {
        if (data) {
            setValue("title", data.data.title);
            setValue("desc", data.data.description);
        }
    }, [data]);

    const handleFile = (e) => {
        const { files } = e.target;
        if (files[0]) {
            setImg(files[0]);
        }
    };

    const onSubmit = (formData) => {
        const formDataToSend = new FormData();
        formDataToSend.append("id", id);
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.desc);

        if (formData.file && formData.file[0]) {
            formDataToSend.append("image", formData.file[0]);
        } else {
            formDataToSend.append("image", data?.data.image);
        }

        mutate(formDataToSend);
    };

    return (
        <div className="relative min-h-screen bg-gray-100">
            <div className="relative flex items-center justify-center min-h-screen px-4 py-8 z-10">
                <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                    <Link
                        href="/productlist"
                        className="inline-block mb-4 text-blue-600 hover:underline"
                    >
                        &larr; Back to Product List
                    </Link>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                                Update Product
                            </h1>

                            {/* Title Input */}
                            <div>
                                <label
                                    className="block text-gray-700 text-sm font-medium mb-2"
                                    htmlFor="title"
                                >
                                    Title
                                </label>
                                <input
                                    {...register("title", {
                                        required: "Title is required",
                                    })}
                                    type="text"
                                    id="title"
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    placeholder="Enter product title"
                                />
                                {errors.title && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.title.message}
                                    </p>
                                )}
                            </div>

                            {/* Description Input */}
                            <div>
                                <label
                                    className="block text-gray-700 text-sm font-medium mb-2"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                <textarea
                                    {...register("desc", {
                                        required: "Description is required",
                                    })}
                                    id="description"
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    placeholder="Enter product description"
                                    rows="4"
                                ></textarea>
                                {errors.desc && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.desc.message}
                                    </p>
                                )}
                            </div>

                            {/* Image Input */}
                            <div>
                                <label
                                    className="block text-gray-700 text-sm font-medium mb-2"
                                    htmlFor="image"
                                >
                                    Choose Photo
                                </label>
                                <input
                                    {...register("file")}
                                    type="file"
                                    id="image"
                                    accept="image/*"
                                    onChange={handleFile}
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />

                                {/* Display selected file name or image preview */}
                                {img ? (
                                    <img
                                        src={URL.createObjectURL(img)}
                                        alt="Selected"
                                        className="mt-4 h-[180px] object-cover rounded-lg shadow-sm"
                                    />
                                ) : (
                                    data?.data?.image && (
                                        <img
                                            src={product(data.data.image)}
                                            alt="Product"
                                            className="mt-4 h-[180px] object-cover rounded-lg shadow-sm"
                                        />
                                    )
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-center justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                                >
                                    {isPending ? "Updating..." : "Update"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
