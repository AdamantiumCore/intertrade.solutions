'use client'

import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren } from "react"
import useQueryClient from "./use-query-client"

const ClientProviders = ({children}: PropsWithChildren) => {

    const queryClient = useQueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default ClientProviders