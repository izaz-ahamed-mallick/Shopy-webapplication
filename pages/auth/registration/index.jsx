import { useSignUpMutation } from "@/hooks/customHooks/authQuery.hooks";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
    } = useForm({ mode: "onChange" });

    const { mutate, isPending } = useSignUpMutation();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("confirmPassword", data.confirmPassword);
        formData.append("profile_pic", data.profile_pic[0]);
        mutate(formData);
    };

    const password = watch("password");

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Register
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            {...register("first_name", {
                                required: "First Name is required",
                            })}
                            className={`block w-full px-3 py-2 mt-1 border rounded-md shadow-sm ${
                                errors.first_name
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition`}
                        />
                        {errors.first_name && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.first_name.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            {...register("last_name", {
                                required: "Last Name is required",
                            })}
                            className={`block w-full px-3 py-2 mt-1 border rounded-md shadow-sm ${
                                errors.last_name
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition`}
                        />
                        {errors.last_name && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.last_name.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                            })}
                            className={`block w-full px-3 py-2 mt-1 border rounded-md shadow-sm ${
                                errors.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition`}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                            className={`block w-full px-3 py-2 mt-1 border rounded-md shadow-sm ${
                                errors.password
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition`}
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="confirm-password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === password ||
                                    "Passwords do not match",
                            })}
                            className={`block w-full px-3 py-2 mt-1 border rounded-md shadow-sm ${
                                errors.confirmPassword
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition`}
                        />
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="profile-picture"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Profile Picture
                        </label>
                        <input
                            id="profile-picture"
                            name="profile-picture"
                            type="file"
                            {...register("profile_pic", {
                                required: "Profile Picture is required",
                            })}
                            className={`block w-full px-3 py-2 mt-1 border rounded-md shadow-sm ${
                                errors.profile_pic
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition`}
                        />
                        {errors.profile_pic && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.profile_pic.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                        >
                            {isPending ? "Registering..." : "Register"}
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">
                            Already have an account?{" "}
                            <Link
                                href="/auth/login"
                                className="text-blue-500 hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
