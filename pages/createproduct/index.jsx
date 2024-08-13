import { useCreateProduct } from "@/hooks/customHooks/Product.hook";
import Link from "next/link";
import { useForm } from "react-hook-form";

const CreateProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { mutate, isPending } = useCreateProduct();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("image", data.image[0]);

        mutate(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <Link
                    href="/productlist"
                    className="inline-block mb-4 text-blue-600 hover:underline"
                >
                    &larr; Back to Product List
                </Link>
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Create a New Product
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Title Input */}
                    <div className="relative">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
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
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="Enter product title"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    {/* Description Input */}
                    <div className="relative">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea
                            {...register("description", {
                                required: "Description is required",
                            })}
                            id="description"
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="Enter product description"
                            rows="4"
                        ></textarea>
                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    {/* Image Input */}
                    <div className="relative">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="image"
                        >
                            Choose Photo
                        </label>
                        <input
                            {...register("image", {
                                required: "Photo is required",
                            })}
                            type="file"
                            id="image"
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.image.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow transition"
                        >
                            {isPending ? "Creating..." : "Create Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
