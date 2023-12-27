'use client';

import React from "react";
import {
    RainbowkitProvider,
    getDefaultWallets,
    connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
    argentWallet,
    trustWallet,
    ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMubai, sepolia, lineaTest } from "wagmi/chains";
import { publicProvider } from 'wagmi/providers/public';

const projectId = process.env.BUNN_PUBLIC_PROJECT_ID;

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygonMumbai, sepolia, lineaTestnet],
    [publicProvider()]
);

const { wallets } = getDefaultWallets({
    appName: "BUNN-DAO",
    projectId,
    chains,
});

const DAOappinfo = {
    appName: "BUNN-DAO",
};

const  connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: "Others",
        wallets: [
            argentWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains}),
        ],
    },
]);

const WagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClients,
    webSocketPublicClient,
});

const  Providers = () => {
    return(
        <WagmiConfig config={wagmiConfig}>
            <RainbowkitProvider
            chains={ chains }
            appInfo={DAOappinfo}
            modalSize="compact"
            >
                {children}
            </RainbowkitProvider>

        </WagmiConfig>
    );

};

export default Providers;