import { login } from "@/api/functions/login.api";
import { Cookies } from "react-cookie";
import { useGlobalHooks } from "../globalHooks/globalHooks";
import { useMutation } from "@tanstack/react-query";
import registration from "@/api/functions/registration.api";

import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginData } from "@/reduxToolkit/AuthSlice";

export const useSignInMutation = () => {
    const router = useRouter();
    const cookie = new Cookies();
    const dispatch = useDispatch();
    const { queryClient } = useGlobalHooks();

    return useMutation({
        mutationFn: login,
        onSuccess: (response) => {
            const { token, status, message, data } = response || {};
            if (status === 200) {
                dispatch(
                    loginData({
                        token: token,
                        firstname: data.first_name,
                        image: data.profile_pic,
                    })
                );
                toast(message, "success");
                router.push("/productlist");
            } else {
                toast(message, "error");
            }
            queryClient.invalidateQueries({ queryKey: ["USERS"] });
        },
    });
};

export const useSignUpMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: registration,
        onSuccess: (response) => {
            console.log(response);
            const { status, message } = response;
            if (status === 200) {
                toast(message);
                router.push("/auth/login");
            } else {
                toast(message);
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });
};
