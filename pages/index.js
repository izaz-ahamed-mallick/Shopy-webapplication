import Image from "next/image";
import { Inter } from "next/font/google";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "@/public/image1.jpg";
import img2 from "@/public/image2.png";
import img3 from "@/public/image3.png";
import img4 from "@/public/image4.png";
import bg from "../public/Images/bg1.jpeg";

const images = [img1, img2, img3, img4, img1, img2, img3, img4];
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const { isTokenAvailable } = useSelector((state) => state.auth);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        isHydrated && (
            <div className="relative min-h-screen flex flex-col bg-gray-100 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        priority
                        src={bg}
                        alt="Background"
                        className="z-[-1] object-cover w-full h-full opacity-40"
                    />
                </div>

                <main className="flex-grow flex items-center justify-center py-12 px-4 lg:px-8">
                    <div className="text-center px-6 py-8 bg-white shadow-lg rounded-lg max-w-md mx-auto relative z-10">
                        <div className="mb-6">
                            <Swiper
                                navigation={false}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay]}
                                className="swiper-container"
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={image}
                                            alt={`Slide ${index}`}
                                            className="rounded-lg"
                                            priority
                                            width={600}
                                            height={400}
                                            placeholder="blur"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <h1 className="text-3xl font-extrabold mb-4 text-gray-800 md:text-4xl">
                            {isTokenAvailable
                                ? "Manage Your Products"
                                : "Please Login to Create Products"}
                        </h1>
                        <p className="text-gray-700 mb-6">
                            {isTokenAvailable
                                ? "You can now create, view, and update products."
                                : "To access the product creation feature, please log in to your account. If you don't have an account, please register first."}
                        </p>
                        <Link
                            href={
                                isTokenAvailable
                                    ? "/productlist"
                                    : "/auth/login"
                            }
                            className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                        >
                            {isTokenAvailable ? "View Products" : "Login"}
                        </Link>
                    </div>
                </main>
            </div>
        )
    );
}
