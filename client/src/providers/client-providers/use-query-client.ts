import { QueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

const useQueryClient  = () => {
    return useMemo(() => {
        const queryClient  = new QueryClient()
        return queryClient;
    }, [])
}

export default useQueryClient;