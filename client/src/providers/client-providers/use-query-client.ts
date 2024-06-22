import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useQueryClient = () => {
    const [client] = useState(() => {
        const queryClient = new QueryClient()
        return queryClient;
    })

    return client;
}

export default useQueryClient;