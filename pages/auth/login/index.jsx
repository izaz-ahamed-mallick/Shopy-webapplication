import { useSignInMutation } from "@/hooks/customHooks/authQuery.hooks";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Login = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const { mutate, isPending } = useSignInMutation();

    const onSubmit = (data) => mutate(data);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-gray-200">
                <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
                    Login
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Invalid email format",
                                },
                            })}
                            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                                errors.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                                errors.password
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                    >
                        {isPending ? "Logging in..." : "Login"}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            href="/auth/registration"
                            className="text-blue-600 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
