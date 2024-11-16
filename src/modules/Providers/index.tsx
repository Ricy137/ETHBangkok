"use client";
import {Provider as JotaiProvider} from "jotai";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {baseSepolia} from "wagmi/chains";
import {http, cookieStorage, createConfig, createStorage} from "wagmi";
import {coinbaseWallet} from "wagmi/connectors";
import {OnchainKitProvider} from "@coinbase/onchainkit";
import {type ReactNode, useState} from "react";
import {type State, WagmiProvider} from "wagmi";

const config = createConfig({
    chains: [baseSepolia],
    connectors: [
        coinbaseWallet({
            appName: "ETHBangkok",
            preference: "all",
        }),
    ],
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
    transports: {
        [baseSepolia.id]: http(),
    },
});

export function Providers(props: {children: ReactNode; initialState?: State}) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <JotaiProvider>
            <WagmiProvider config={config} initialState={props.initialState}>
                <QueryClientProvider client={queryClient}>
                    <OnchainKitProvider
                        apiKey="uXjNyHF9eDspiEz5B7jiTsZitrI2IjNB"
                        chain={baseSepolia}
                        config={{
                            appearance: {
                                mode: "auto",
                                theme: "default",
                            },
                        }}
                    >
                        {props.children}
                    </OnchainKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </JotaiProvider>
    );
}
