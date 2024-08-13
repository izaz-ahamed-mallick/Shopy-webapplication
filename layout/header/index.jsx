import Link from "next/link";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/reduxToolkit/AuthSlice";
import { profile_pic } from "@/api/axios/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/Images/logo.png";
const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isTokenAvailable, firstname, image } = useSelector(
        (state) => state.auth
    );
    const [isClient, setIsClient] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        setIsDropdownOpen(false);
        router.push("/auth/login");
        toast.success("Logged out successfully");
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    if (!isClient) return null;

    return (
        <header className="bg-indigo-700 shadow-md">
            <nav className="container mx-auto flex items-center h-[80px] justify-between  lg:px-8">
                <div className="flex items-center ">
                    <Link href="/">
                        {/* Replace the src with the path to your logo */}
                        <Image
                            priority
                            width={100}
                            height={100}
                            src={logo}
                            alt="SHOPY Logo"
                            className=" object-cover"
                        />
                    </Link>
                    <Link href="/">
                        <span className="text-white text-2xl md:text-3xl font-bold tracking-wide ml-2 md:ml-3">
                            SHOPY
                        </span>
                    </Link>
                </div>
                <div className="flex items-center space-x-4 md:space-x-6 relative">
                    {!isTokenAvailable ? (
                        <Link href="/">
                            <span className="bg-indigo-600 text-white px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-indigo-700 transition">
                                Home
                            </span>
                        </Link>
                    ) : (
                        <div className="relative">
                            <div
                                className="flex items-center gap-2 md:gap-3 cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <Image
                                    priority
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
                                    src={profile_pic(image)}
                                    alt={`${firstname}'s profile`}
                                />
                                <span className="text-white font-medium text-sm md:text-base">
                                    {firstname}
                                </span>
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 md:w-48 bg-white rounded-lg shadow-lg z-20 border border-gray-200">
                                    <Link
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg transition"
                                        href={"/profiledetails"}
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                                        href={"/createproduct"}
                                    >
                                        Create Product
                                    </Link>
                                    <button
                                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg transition"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
