import profileDetails from "@/api/functions/profile.api";
import { useQuery } from "@tanstack/react-query";

export const useProfileDetails = () => {
    return useQuery({
        queryKey: ["USERS"],
        queryFn: profileDetails,
        staleTime: 10000,
    });
};
