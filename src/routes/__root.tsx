import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";

const queryClient = new QueryClient();

export const Route = createRootRoute({
    component: RootComponent,
    context: () => ({
        queryClient,
    }),
});

function RootComponent() {
    return (
        <React.Fragment>
            <QueryClientProvider client={queryClient}>
                <Header />
                <Outlet />
            </QueryClientProvider>
        </React.Fragment>
    );
}
