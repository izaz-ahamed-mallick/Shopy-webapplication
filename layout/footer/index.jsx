import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../public/Images/logo.png";

const Footer = () => {
    return (
        <footer className="bg-indigo-700">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 space-y-4 md:space-y-0">
                <div className="flex items-center space-x-3">
                    {/* Replace the src with the path to your logo */}
                    <Image
                        height={100}
                        width={100}
                        src={logo}
                        alt="SHOPY Logo"
                        className="object-cover"
                    />
                    <span className="text-white text-lg font-bold">SHOPY</span>
                </div>
                <div className="flex space-x-6 text-white text-sm md:text-base">
                    <Link
                        href="/privacy-policy"
                        className="hover:text-gray-300 transition"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms-of-service"
                        className="hover:text-gray-300 transition"
                    >
                        Terms of Service
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="text-white hover:text-gray-300 transition text-lg md:text-xl" />
                    </Link>
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="text-white hover:text-gray-300 transition text-lg md:text-xl" />
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="text-white hover:text-gray-300 transition text-lg md:text-xl" />
                    </Link>
                </div>
            </div>
            <div className="text-center text-white text-xs md:text-sm mt-4">
                © {new Date().getFullYear()} SHOPY. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
