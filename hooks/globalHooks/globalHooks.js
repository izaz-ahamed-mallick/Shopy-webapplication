import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useGlobalHooks = () => {
    const queryClient = useQueryClient();

    return { queryClient };
};
