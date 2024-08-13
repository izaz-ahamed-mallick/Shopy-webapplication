import { NextResponse } from "next/server";
import "react-toastify/dist/ReactToastify.css";

export function middleware(request) {
    const token = request.cookies.get("token");

    console.log("Middleware called");
    console.log("Request URL:", request.url);
    console.log("Token:", token);

    if (!token || token === undefined) {
        console.log("Redirecting to /auth/login");
        return NextResponse.redirect(new URL("/auth/login", request.url));
    } else {
        console.log("Proceeding to next response");
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        "/profiledetails",
        "/productlist",
        "/createproduct",
        "/update/:path*",
    ],
};
