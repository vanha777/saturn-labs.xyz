"use client";


import { NearContext } from '../context';
import { SetStateAction, useEffect, useState } from "react";
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
// import { IDKitProvider } from '@worldcoin/idkit'
// import { config } from '../config'

const config = getDefaultConfig({
    appName: 'crypto-ql',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, polygon, optimism, arbitrum, base, sepolia, optimismSepolia],
    ssr: true, // If your dApp uses server side rendering (SSR)
});


import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultConfig,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
    optimismSepolia
} from 'wagmi/chains';
import Navbar from './components/ui/navbar';



// CONSTANTS
const MPC_CONTRACT = 'v1.signer-prod.testnet';

// NEAR WALLET
// @ts-ignore
// const wallet = new Wallet({ networkId: 'testnet', createAccessKeyFor: MPC_CONTRACT });

const queryClient = new QueryClient()

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
    const [signedAccountId, setSignedAccountId] = useState<string>('');

    const [wallet, setWallet] = useState<any>(null);
    // useEffect(() => {
    //     // @ts-ignore
    //     const wallet = new Wallet({ networkId: 'testnet', createAccessKeyFor: 'v1.signer-prod.testnet' });
    //     wallet.startUp((signedAccountId: SetStateAction<string>) => {
    //         // Handle account change
    //         console.log(signedAccountId);
    //         setSignedAccountId(signedAccountId);
    //     }).then(() => {
    //         // Wallet is now initialized and ready to use
    //         // You can store the wallet instance in state or context if needed
    //         setWallet(wallet);
    //         //setSignedAccountId(signedAccountId);
    //         //console.log(signedAccountId);

    //     });
    // }, []);

    return (

        <div data-theme="aqua">
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider>
                        <Navbar />
                        {/* <NearContext.Provider value={{ wallet, signedAccountId }}> */}
                        {/* <main className="min-h-screen h-screen w-screen flex flex-row ">
                        <div className="flex-grow overflow-auto mx-12 my-12">
                            <div className=""> */}
                        {children}
                        {/* </div>
                        </div>
                    </main> */}
                        {/* </NearContext.Provider> */}
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </div>
    )
}

export default LayoutClient;