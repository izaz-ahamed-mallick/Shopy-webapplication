"use client";
import createProduct from "@/api/functions/createProduct.api";
import { getProduct } from "@/api/functions/productList.api";
import { useQuery } from "@tanstack/react-query";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useGlobalHooks } from "../globalHooks/globalHooks";
import removeProduct from "@/api/functions/removeproduct.api";
import { getProductDetails } from "@/api/functions/getProductDetails.api";
import { updateProduct } from "@/api/functions/updateProduct.api";

export const useGetProductList = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: getProduct,
        keepPreviousData: true,
        staleTime: 5000,
    });

    return { data, error, isLoading };
};

export const useCreateProduct = () => {
    const { queryClient } = useGlobalHooks();
    const router = useRouter();
    return useMutation({
        mutationFn: createProduct,
        onSuccess: (response) => {
            const { data, status } = response;
            if (status === 200) {
                toast.success(data?.message);

                queryClient.invalidateQueries(["products"]);
                router.push("/productlist");
            } else {
                toast(data?.message);
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });
};

export const useRemoveProduct = () => {
    const { queryClient } = useGlobalHooks();
    return useMutation({
        mutationFn: removeProduct,
        onSuccess: (response) => {
            console.log(response);
            if (response.status === 200) {
                toast(response.data.message);
                queryClient.invalidateQueries(["products"]);
            } else {
                toast(response.data.message);
            }
        },
    });
};

export const useProductDetails = (id) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["productDetails", id],
        queryFn: async () => await getProductDetails(id),
    });

    return { data, isError, isLoading };
};

export const useUpdate = () => {
    const { queryClient } = useGlobalHooks();
    const router = useRouter();
    return useMutation({
        mutationFn: updateProduct,
        onSuccess: (response) => {
            const { data, message, status } = response;
            toast(message);
            if (status === 200) {
                queryClient.invalidateQueries(["products"]);

                router.push("/productlist");
            }
        },
    });
};
